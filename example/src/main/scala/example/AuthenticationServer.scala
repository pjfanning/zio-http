package example

import pdi.jwt.{Jwt, JwtAlgorithm, JwtClaim}
import zhttp.http.Middleware.jwtAuth
import zhttp.http._
import zhttp.service.Server
import zio.{App, ExitCode, URIO}

import java.time.Clock

object AuthenticationServer extends App {
  // Secret Authentication key
  val SECRET_KEY = "secretKey"

  implicit val clock: Clock = Clock.systemUTC

  // Helper to encode the JWT token
  def jwtEncode(username: String): String = {
    val json  = s"""{"user": "${username}"}"""
    val claim = JwtClaim { json }.issuedNow.expiresIn(300)
    Jwt.encode(claim, SECRET_KEY, JwtAlgorithm.HS512)
  }

  // Helper to decode the JWT token
  def jwtDecode(token: String): Option[JwtClaim] = {
    Jwt.decode(token, SECRET_KEY, Seq(JwtAlgorithm.HS512)).toOption
  }

  // Http app that requires a JWT claim
  def user: UHttpApp = Http.collect[Request] {
    case Method.GET -> !! / "user" / name / "greet"     => Response.text(s"Welcome to the ZIO party! ${name}")
    case req @ Method.GET -> !! / "user" / "expiration" =>
      req.headers.bearerToken
        .flatMap(jwtDecode)
        .fold(Response.text("Request is not having Authorization header"))(claim =>
          Response.text(s"Expires in: ${claim.expiration.getOrElse(-1L)}"),
        )
  }

  // App that let's the user login
  // Login is successful only if the password is the reverse of the username
  def login: UHttpApp = Http.collect[Request] { case Method.GET -> !! / "login" / username / password =>
    if (password.reverse == username) Response.text(jwtEncode(username))
    else Response.fromHttpError(HttpError.Unauthorized("Invalid username of password\n"))
  }

  // Composing all the HttpApps together
  val app: UHttpApp = login ++ (user @@ jwtAuth(token => jwtDecode(token).fold(false)(_ => true)))

  // Run it like any simple app
  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =
    Server.start(8090, app).exitCode
}