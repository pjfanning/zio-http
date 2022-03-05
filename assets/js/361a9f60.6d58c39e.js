"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[904],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,p=function(t,e){if(null==t)return{};var n,a,p={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var r=a.createContext({}),s=function(t){var e=a.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(r.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,p=t.mdxType,i=t.originalType,r=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),h=p,m=u["".concat(r,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function h(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:p,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2923:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),p=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:"2"},r="Http",s={unversionedId:"v1.x/dsl/http",id:"v1.x/dsl/http",isDocsHomePage:!1,title:"Http",description:"Http is a functional domain that models HTTP applications. It\u2019s polymorphic on input and output type.",source:"@site/docs/v1.x/dsl/http.md",sourceDirName:"v1.x/dsl",slug:"/v1.x/dsl/http",permalink:"/zio-http/docs/v1.x/dsl/http",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Server",permalink:"/zio-http/docs/v1.x/dsl/server"},next:{title:"Request",permalink:"/zio-http/docs/v1.x/dsl/request"}},c=[{value:"Creating an HTTP Application",id:"creating-an-http-application",children:[{value:"HTTP application that always succeeds",id:"http-application-that-always-succeeds",children:[],level:3},{value:"HTTP application that always fails",id:"http-application-that-always-fails",children:[],level:3},{value:"HTTP application from a partial function",id:"http-application-from-a-partial-function",children:[],level:3},{value:"HTTP application from a total function",id:"http-application-from-a-total-function",children:[],level:3}],level:2},{value:"Transforming Http Applications",id:"transforming-http-applications",children:[{value:"Transforming the output",id:"transforming-the-output",children:[],level:3},{value:"Transforming the input",id:"transforming-the-input",children:[],level:3},{value:"Chaining HTTP applications",id:"chaining-http-applications",children:[],level:3},{value:"Folding an HTTP application",id:"folding-an-http-application",children:[],level:3}],level:2},{value:"Error Handling",id:"error-handling",children:[{value:"Catch all errors",id:"catch-all-errors",children:[],level:3},{value:"Mapping the error",id:"mapping-the-error",children:[],level:3}],level:2},{value:"Composition of HTTP applications",id:"composition-of-http-applications",children:[{value:"Using <code>++</code>",id:"using-",children:[],level:3},{value:"Using <code>&lt;&gt;</code>",id:"using--1",children:[],level:3},{value:"Using <code>&gt;&gt;&gt;</code>",id:"using--2",children:[],level:3},{value:"Using <code>&lt;&lt;&lt;</code>",id:"using--3",children:[],level:3}],level:2},{value:"Providing environments",id:"providing-environments",children:[{value:"provideCustomLayer",id:"providecustomlayer",children:[],level:3}],level:2},{value:"Attaching Middleware",id:"attaching-middleware",children:[],level:2},{value:"Unit testing",id:"unit-testing",children:[],level:2},{value:"Special Constructors for HttpApp",id:"special-constructors-for-httpapp",children:[{value:"Http.ok",id:"httpok",children:[],level:3},{value:"Http.text",id:"httptext",children:[],level:3},{value:"Http.status",id:"httpstatus",children:[],level:3},{value:"Http.error",id:"httperror",children:[],level:3},{value:"Http.response",id:"httpresponse",children:[],level:3}],level:2},{value:"Special operators on HttpApp",id:"special-operators-on-httpapp",children:[{value:"setMethod",id:"setmethod",children:[],level:3},{value:"patch",id:"patch",children:[],level:3},{value:"getBodyAsString",id:"getbodyasstring",children:[],level:3}],level:2},{value:"Converting an <code>Http</code> to <code>HttpApp</code>",id:"converting-an-http-to-httpapp",children:[{value:"Using map and contramap",id:"using-map-and-contramap",children:[],level:3},{value:"Using middleware",id:"using-middleware",children:[],level:3}],level:2},{value:"Running an HttpApp",id:"running-an-httpapp",children:[],level:2}],d={toc:c};function u(t){var e=t.components,n=(0,p.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http"},"Http"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Http")," is a functional domain that models HTTP applications. It\u2019s polymorphic on input and output type."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[-R, +E, -A, +B]")," models a function from ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO[R, Option[E], B]"),". When a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," is evaluated against an ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,B]"),", it can either succeed with a ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," , fail with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Some[E]")," or if ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," is not defined in the application, fail with ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Http")," domain provides several operators and constructors to model the application as per your use case."),(0,i.kt)("h2",{id:"creating-an-http-application"},"Creating an HTTP Application"),(0,i.kt)("h3",{id:"http-application-that-always-succeeds"},"HTTP application that always succeeds"),(0,i.kt)("p",null,"To create an HTTP application that always returns the same response and never fails, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," constructor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: Http[Any, Nothing, Any, Int] = Http.succeed(1)\n")),(0,i.kt)("h3",{id:"http-application-that-always-fails"},"HTTP application that always fails"),(0,i.kt)("p",null,"To create an HTTP application that always fails with the given error, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"fail")," constructor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val app: Http[Any, Error, Any, Nothing] = Http.fail(new Error("Error_Message"))\n')),(0,i.kt)("p",null,"HTTP applications can also be created from total and partial functions. These are some constructors to create HTTP applications from total as well as partial functions."),(0,i.kt)("h3",{id:"http-application-from-a-partial-function"},"HTTP application from a partial function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Http.Collect")," can create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[Any, Nothing, A, B]")," from a ",(0,i.kt)("inlineCode",{parentName:"p"},"PartialFunction[A, B]"),". In case the input is not defined for the partial function, the application will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," type error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val app: Http[Any, Nothing, String, String] = Http.collect[String] {\n    case "case 1" => "response 1"\n    case "case 2" => "response 2"\n  }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Http.CollectZIO")," can be used to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," from a partial function that returns a ZIO effect, i.e ",(0,i.kt)("inlineCode",{parentName:"p"},"PartialFunction[A, ZIO[R, E, B]"),". This constructor is used when the output is effectful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val app: Http[Any, Nothing, String, String] = Http.collectZIO[String] {\n    case "case 1" => ZIO.succeed("response 1")\n  }\n')),(0,i.kt)("h3",{id:"http-application-from-a-total-function"},"HTTP application from a total function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Http.fromFunction")," can create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[Any, Nothing, A, B]")," from a function ",(0,i.kt)("inlineCode",{parentName:"p"},"f: A=>B"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: Http[Any, Nothing, Int, Int] = Http.fromFunction[Int](i => i + 1)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Http.fromFunctionZIO")," can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," from a function that returns a ZIO effect, i.e ",(0,i.kt)("inlineCode",{parentName:"p"},"f: A => ZIO[R, E, B]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: Http[Any, Nothing, Int, Int] = Http.fromFunction[Int](i => ZIO.succeed(i + 1))\n")),(0,i.kt)("h2",{id:"transforming-http-applications"},"Transforming Http Applications"),(0,i.kt)("p",null,"Http operators are used to transform one or more HTTP applications to create a new HTTP application. Http domain provides plenty of such powerful operators."),(0,i.kt)("h3",{id:"transforming-the-output"},"Transforming the output"),(0,i.kt)("p",null,"To transform the output of the HTTP application, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," operator . It takes a function ",(0,i.kt)("inlineCode",{parentName:"p"},"f: B=>C")," to convert a ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,B]"),"to ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,C]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: Http[Any, Nothing, Any, String] = Http.succeed("text")\n  val app: Http[Any, Nothing, Any, Int] = a.map(s => s.length())\n')),(0,i.kt)("p",null,"To transform the output of the HTTP application effectfully, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"mapZIO")," operator. It takes a function ",(0,i.kt)("inlineCode",{parentName:"p"},"B => ZIO[R1, E1, C]")," to convert a ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,B]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,C]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: Http[Any, Nothing, Any, String] = Http.succeed("text")\n  val app: Http[Any, Nothing, Any, Int] = a.mapZIO(s => ZIO.succeed(s.length()))\n')),(0,i.kt)("h3",{id:"transforming-the-input"},"Transforming the input"),(0,i.kt)("p",null,"To transform the input of the HTTP application, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"contramap")," operator. Before passing the input on to the HTTP application, ",(0,i.kt)("inlineCode",{parentName:"p"},"contramap")," applies a function ",(0,i.kt)("inlineCode",{parentName:"p"},"xa: X => A")," on it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val a: Http[Any, Nothing, String, String] = Http.fromFunction[String](s => s + ' ' + s)\n  val app: Http[Any, Nothing, Int, String] = a.contramap[Int](_.toString)\n")),(0,i.kt)("p",null,"To transform the input of the HTTP application effectfully, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"contramapZIO")," operator. Before passing the input on to the HTTP application, ",(0,i.kt)("inlineCode",{parentName:"p"},"contramapZIO")," applies a function ",(0,i.kt)("inlineCode",{parentName:"p"},"xa: X => ZIO[R1, E1, A]")," on it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val a: Http[Any, Nothing, String, String] = Http.fromFunction[String](s => s + ' ' + s)\n  val app: Http[Any, Any, Int, String] = a.contramapZIO[Any, Any,Int](a=>ZIO.succeed(a.toString))\n")),(0,i.kt)("h3",{id:"chaining-http-applications"},"Chaining HTTP applications"),(0,i.kt)("p",null,"To chain two HTTP applications, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"flatMap")," operator.It creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R1, E1, A1, C1]")," from the output of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,B]"),", using a function ",(0,i.kt)("inlineCode",{parentName:"p"},"f: B => Http[R1, E1, A1, C1]"),". ",(0,i.kt)("inlineCode",{parentName:"p"},">>=")," is an alias for flatMap."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: Http[Any, Nothing, Any, String] = Http.succeed("text1")\n  val app: Http[Any, Nothing, Any, String] = a >>= (s => Http.succeed(s + " text2"))\n')),(0,i.kt)("h3",{id:"folding-an-http-application"},"Folding an HTTP application"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"foldHttp")," lets you handle the success and failure values of an HTTP application. It takes in two functions, one for failure and one for success, and one more HTTP application. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the application fails with ",(0,i.kt)("inlineCode",{parentName:"li"},"Some[E]")," the first function will be executed with ",(0,i.kt)("inlineCode",{parentName:"li"},"E"),", "),(0,i.kt)("li",{parentName:"ul"},"If the application succeeds with ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),", the second function will be executed with ",(0,i.kt)("inlineCode",{parentName:"li"},"B")," and "),(0,i.kt)("li",{parentName:"ul"},"If the application fails with ",(0,i.kt)("inlineCode",{parentName:"li"},"None")," the given HTTP application will be executed with the original input.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: Http[Any, String, String, String] = Http.collectHttp[String]{\n    case "case" => Http.fail("1")\n    case _ => Http.succeed("2")\n  }\n  val b: Http[Any, Nothing, Any, String] = Http.succeed("3")\n  val app: Http[Any, Nothing, String, String] = a.foldHttp(e => Http.succeed(e), s => Http.succeed(s), b)\n')),(0,i.kt)("h2",{id:"error-handling"},"Error Handling"),(0,i.kt)("p",null,"These are several ways in which error handling can be done in ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," domain,"),(0,i.kt)("h3",{id:"catch-all-errors"},"Catch all errors"),(0,i.kt)("p",null,"To catch all errors in case of failure of an HTTP application, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"catchAll")," operator. It pipes the error to a function ",(0,i.kt)("inlineCode",{parentName:"p"},"f: E => Http[R1, E1, A1, B1]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: Http[Any, Throwable, Any, Nothing] = Http.fail(new Throwable("Error_Message"))\n  val app: Http[Any, Nothing, Any, Option[Throwable]] = a.catchAll(e => Http.succeed(Option(e)))\n')),(0,i.kt)("h3",{id:"mapping-the-error"},"Mapping the error"),(0,i.kt)("p",null,"To transform the failure of an HTTP application, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"mapError")," operator. It pipes the error to a function ",(0,i.kt)("inlineCode",{parentName:"p"},"ee: E => E1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: Http[Any, Throwable, Any, Nothing] = Http.fail(new Throwable("Error_Message"))\n  val app: Http[Any, Option[Throwable], Any, Nothing] = a.mapError(e => Option(e))\n')),(0,i.kt)("h2",{id:"composition-of-http-applications"},"Composition of HTTP applications"),(0,i.kt)("p",null,"HTTP applications can be composed using several special operators."),(0,i.kt)("h3",{id:"using-"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"++")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"++")," is an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultWith"),". While using ",(0,i.kt)("inlineCode",{parentName:"p"},"++"),", if the first HTTP application returns ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," the second HTTP application will be evaluated, ignoring the result from the first. If the first HTTP application is failing with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Some[E]")," the second HTTP application won't be evaluated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: Http[Any, Nothing, String, String] = Http.collect[String] {\n    case "case 1" => "response 1"\n    case "case 2" => "response 2"\n  }\n  val b: Http[Any, Nothing, String, String] = Http.collect[String] {\n    case "case 3" => "response 3"\n    case "case 4" => "response 4"\n  }\n  val app: Http[Any, Nothing, String, String] = a ++ b\n')),(0,i.kt)("h3",{id:"using--1"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"<>")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<>")," is an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"orElse"),". While using ",(0,i.kt)("inlineCode",{parentName:"p"},"<>"),", if the first HTTP application fails with ",(0,i.kt)("inlineCode",{parentName:"p"},"Some[E]"),", the second HTTP application will be evaluated, ignoring the result from the first. If the first HTTP application returns ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", the second HTTP application won't be evaluated. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: Http[Any, Nothing, Any, Int] = Http.fail(1) <> Http.succeed(2)\n")),(0,i.kt)("h3",{id:"using--2"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},">>>")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},">>>")," is an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"andThen"),". It runs the first HTTP application and pipes the output into the other."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val a: Http[Any, Nothing, Int, Int] = Http.fromFunction[Int](a => a + 1)\n  val b: Http[Any, Nothing, Int, Int] = Http.fromFunction[Int](b => b * 2)\n  val app: Http[Any, Nothing, Int, Int] = a >>> (b)\n")),(0,i.kt)("h3",{id:"using--3"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"<<<")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<<<")," is the alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"compose"),". Compose is similar to andThen. It runs the second HTTP application and pipes the output to the first HTTP\napplication."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val a: Http[Any, Nothing, Int, Int] = Http.fromFunction[Int](a => a + 1)\n  val b: Http[Any, Nothing, Int, Int] = Http.fromFunction[Int](b => b * 2)\n  val app: Http[Any, Nothing, Int, Int] = a <<< (b)\n")),(0,i.kt)("h2",{id:"providing-environments"},"Providing environments"),(0,i.kt)("p",null,"There are many operators to provide the HTTP application with its required environment."),(0,i.kt)("h3",{id:"providecustomlayer"},"provideCustomLayer"),(0,i.kt)("p",null,"Provides the HTTP application with the part of the environment that is not part of the ZEnv, leaving an effect that only depends on the ZEnv."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: Http[Clock, DateTimeException, String, OffsetDateTime] = Http.collectZIO[String] {\n    case "case 1"    => clock.currentDateTime\n  }\n  val app: Http[zio.ZEnv, DateTimeException, String, OffsetDateTime] = a.provideCustomLayer(Clock.live)\n')),(0,i.kt)("h2",{id:"attaching-middleware"},"Attaching Middleware"),(0,i.kt)("p",null,"Middlewares are essentially transformations that one can apply to any ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," to produce a new one. To attach middleware to the HTTP application, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware")," operator. ",(0,i.kt)("inlineCode",{parentName:"p"},"@@")," is an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: Http[Any, Int, Any, Nothing] = Http.succeed(1) @@ Middleware.fail(2)\n")),(0,i.kt)("h2",{id:"unit-testing"},"Unit testing"),(0,i.kt)("p",null,"Since an HTTP application ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," is a function from ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO[R, Option[E], B]"),", we can write unit tests just like we do for normal functions."),(0,i.kt)("p",null,"The below snippet tests an app that takes ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," as input and responds by adding 1 to the input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'    package zhttp.http.middleware\n    \n    import zhttp.http._\n    import zio.test.Assertion.equalTo\n    import zio.test._\n    \n    object Spec extends DefaultRunnableSpec {\n    \n      def spec = suite("http")(\n        testM("1 + 1 = 2") {\n          val app: Http[Any, Nothing, Int, Int] = Http.fromFunction[Int](_ + 1)\n          assertM(app(1))(equalTo(2))\n        }\n      )\n    }\n')),(0,i.kt)("h1",{id:"what-is-httpapp"},"What is HttpApp?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp[-R, +E]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R, E, Request, Response]"),", i.e ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp[-R, +E]")," is a function\nfrom ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO[R, Option[E], Response]"),". ZIO HTTP server runs ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp[R, E]")," only."),(0,i.kt)("h2",{id:"special-constructors-for-httpapp"},"Special Constructors for HttpApp"),(0,i.kt)("p",null,"These are some of the special constructors for HttpApp:"),(0,i.kt)("h3",{id:"httpok"},"Http.ok"),(0,i.kt)("p",null,"Creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp")," that always responds with a 200 status code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: HttpApp[Any, Nothing] = Http.ok\n")),(0,i.kt)("h3",{id:"httptext"},"Http.text"),(0,i.kt)("p",null,"Creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp")," that always responds with the same plain text."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val app: HttpApp[Any, Nothing] = Http.text("Text Response")\n')),(0,i.kt)("h3",{id:"httpstatus"},"Http.status"),(0,i.kt)("p",null,"Creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp")," that always responds with the same status code and empty data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: HttpApp[Any, Nothing] = Http.status(Status.OK)\n")),(0,i.kt)("h3",{id:"httperror"},"Http.error"),(0,i.kt)("p",null,"Creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp")," that always fails with the given ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpError"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: HttpApp[Any, Nothing] = Http.error(HttpError.Forbidden())\n")),(0,i.kt)("h3",{id:"httpresponse"},"Http.response"),(0,i.kt)("p",null,"Creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp")," that always responds with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: HttpApp[Any, Nothing] = Http.response(Response.ok)\n")),(0,i.kt)("h2",{id:"special-operators-on-httpapp"},"Special operators on HttpApp"),(0,i.kt)("p",null,"These are some special operators for ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApps"),"."),(0,i.kt)("h3",{id:"setmethod"},"setMethod"),(0,i.kt)("p",null,"Overwrites the method in the incoming request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: HttpApp[Any, Nothing] = Http.collect[Request] {\n    case Method.GET -> !! / "text" => Response.text("Hello World!")\n  }\n  val app = a setMethod (Method.POST)\n')),(0,i.kt)("h3",{id:"patch"},"patch"),(0,i.kt)("p",null,"Patches the response produced by the HTTP application using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Patch"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: HttpApp[Any, Nothing] = Http.collect[Request] {\n    case Method.GET -> !! / "text" => Response.text("Hello World!")\n  }\n  val app = a.patch(Patch.setStatus(Status.ACCEPTED))\n')),(0,i.kt)("h3",{id:"getbodyasstring"},"getBodyAsString"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getBodyAsString")," extract the body of the response as a string and make it the output type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: HttpApp[Any, Nothing] = Http.collect[Request] {\n    case Method.GET -> !! / "text" => Response.text("Hello World!")\n  }\n  val app: Http[Any, Throwable, Request, String] = a.getBodyAsString\n')),(0,i.kt)("h2",{id:"converting-an-http-to-httpapp"},"Converting an ",(0,i.kt)("inlineCode",{parentName:"h2"},"Http")," to ",(0,i.kt)("inlineCode",{parentName:"h2"},"HttpApp")),(0,i.kt)("p",null,"If you want to run an ",(0,i.kt)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," app on the ZIO HTTP server you need to convert it to ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp[R, E]")," using operators\nlike ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"contramap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"codec")," etc."),(0,i.kt)("h3",{id:"using-map-and-contramap"},"Using map and contramap"),(0,i.kt)("p",null,"Below snippet shows an app of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," which takes a string and responds with a string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val http: Http[Any, Nothing, String, String] = Http.collect[String] {\n    case "GET" => "Ok"\n  }\n')),(0,i.kt)("p",null,"Now, to convert it into an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"contramap")," to transform the input ie ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Request")),(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"map")," to transform the output ie ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Response"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  val app: HttpApp[Any, Nothing] = http.contramap[Request](r => r.method.toString()).map[Response](s => Response.text(s))\n")),(0,i.kt)("h3",{id:"using-middleware"},"Using middleware"),(0,i.kt)("p",null,"We can also convert an ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp")," using codec middlewares that take in 2 functions ",(0,i.kt)("inlineCode",{parentName:"p"},"decoder: AOut => Either[E, AIn]")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"encoder: BIn => Either[E, BOut]"),". Please find more operators in middlewares."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val a: Http[Any, Nothing, String, String] = Http.collect[String] { \n    case "GET" => "Ok"\n  }\n  val app: Http[Any, Nothing, Request, Response]  = a @@ Middleware.codec[Request,String](r => Right(r.method.toString()),s => Right(Response.text(s)))\n')),(0,i.kt)("h2",{id:"running-an-httpapp"},"Running an HttpApp"),(0,i.kt)("p",null,"ZIO HTTP server needs an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp[R,E]")," for running.\nWe can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Server.app()")," method to bootstrap the server with an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp[R,E]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  import zhttp.http._\n  import zhttp.service.Server\n  import zio._\n    \n  object HelloWorld extends App {\n    val app: HttpApp[Any, Nothing] = Http.ok\n    override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = Server.start(8090, app).exitCode\n  } \n")))}u.isMDXComponent=!0}}]);