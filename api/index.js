import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, redirect } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect, useRef } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const image4 = "/assets/bestApp-QXVXgfIJ.png";
const BestApp = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center text-center text-gray-800 md:text-white px-4 md:px-44 md:py-36", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image4,
        alt: "Logo",
        className: "object-contain px-4 py-4 md:px-4 md:py-4"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-6xl font-bold", children: "Stay Organized Effortlessly" }),
      /* @__PURE__ */ jsx("h4", { className: "text-sm text-gray-400 md:text-gray-200 md:text-md mt-4", children: "Orci nullam tempor sapien donec enim ipsum integer at porta justo odio vitae auctor vitae integer congue magna lacus odio ac risus auctor tempus magna" })
    ] })
  ] }) });
};
const logoLight = "/assets/mania-puzzle-logo-prTi7xBu.png";
const icMenu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABHSURBVHgB7di5DQAgDARBi8rpHEQHhH5mpCvg0o2A1k7j7XdwxTDjDgMAAAAAxVTqzLr0D10aAAAAAMitUmfWpX/o0gAkcgFQG6XofaAobwAAAABJRU5ErkJggg==";
let page = [
  "About Us",
  "Our Apps",
  "Device Support",
  "Screens",
  "Feedback",
  "Contact Us"
];
const Navbar = ({
  onNavClick
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuItemVisible(true);
      } else {
        setIsMenuItemVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: `top-0 z-20 md:px-44 py-4 md:py-8 transition-colors duration-300 w-full text-gray-600 sticky ${scrolled ? " bg-gray-50 text-gray-600" : " md:absolute bg-transparent md:text-gray-100 mt-4"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "md:flex justify-between items-center relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-4 flex justify-between items-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: logoLight,
              alt: "Logo",
              className: "object-contain cursor-pointer"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: icMenu,
              alt: "Logo",
              className: "w-6 h-6 cursor-pointer md:hidden",
              onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMenuItemVisible(!isMenuItemVisible);
              }
            }
          )
        ] }),
        isMenuItemVisible && /* @__PURE__ */ jsx("ul", { className: "absolute flex flex-col md:flex-row w-full z-10 bg-white md:bg-transparent text-md text-center justify-end items-center font-semibold", children: page.map((item) => /* @__PURE__ */ jsx(
          "li",
          {
            className: `px-4 py-2 rounded-md cursor-pointer ${scrolled ? "md:hover:bg-gray-200" : "md:hover:bg-[rgba(249,250,251,0.2)]"}`,
            onClick: () => onNavClick(item),
            children: /* @__PURE__ */ jsx("a", { children: item })
          },
          item
        )) })
      ] })
    }
  );
};
const background = "/assets/background-CqinVeIE.png";
const OurCompany = ({ ref }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "text-gray-800 bg-gray-100 text-center px-4 md:px-28 py-8 md:py-16 mt-16 md:mt-8 scroll-mt-32",
      ref,
      children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-6xl font-bold", children: "Our Company" }),
        /* @__PURE__ */ jsx("h4", { className: "text-sm text-gray-400 md:text-md mt-4", children: "If you’re under the age required to manage your own Google Account, you must have your parent or legal guardian’s permission to use a Google Account. Please have your parent or legal guardian read these terms with you. If you’re a parent or legal guardian, and you allow your child to use the services, then these terms apply to you and you’re responsible for your child’s activity on the services." })
      ]
    }
  );
};
const AppsAndGames = ({ ref }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "games",
      className: "text-gray-800 text-center px-4 md:px-28 mt-16 md:mt-24 scroll-mt-32",
      ref,
      children: /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-6xl font-bold", children: "Our Apps & Games" })
    }
  );
};
const qr_code = "/assets/qr_code-KDpFE8ky.png";
const ic_play_store = "/assets/apple_play_store-_XpYSpFQ.png";
const GameItem = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col items-center text-gray-500 text-center rounded-md px-2 py-8 bg-white hover:shadow-lg hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer border border-gray-200",
      onClick: () => {
      },
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "bg-gray-100 rounded-full",
            src: qr_code,
            alt: "product-img"
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold mt-6", children: "Scan Barcode - QR Code Reader" }),
        /* @__PURE__ */ jsx("h4", { className: "text-sm text-gray-400 mt-6", children: "Get more information, including search results from well-known websites like Amazon, eBay, and Google, by scanning any QR code or barcode for 100% free!" }),
        /* @__PURE__ */ jsx("img", { src: ic_play_store, alt: "product-img", className: "mt-8 max-w-40" })
      ]
    }
  );
};
const GameList = () => {
  return /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-x-2 md:gap-y-8 mt-4 md:mt-8 px-4 md:px-28", children: [1, 2, 3, 4, 5, 6, 7].map((item) => /* @__PURE__ */ jsx("li", { className: "mx-6", children: /* @__PURE__ */ jsx("a", { children: /* @__PURE__ */ jsx(GameItem, {}) }) }, item)) });
};
const SupportedDevices = ({ ref }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16 text-gray-800 bg-gray-100 text-center px-4 md:px-28 py-16 md:py-24 mt-16 md:mt-24 scroll-mt-32",
      ref,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-6xl font-bold", children: "Available on all your devices" }),
          /* @__PURE__ */ jsx("h4", { className: "text-sm text-gray-400 md:text-md mt-4", children: "An orci nullam tempor sapien, eget gravida integer donec ipsum porta justo at odio integer congue magna undo auctor gravida velna magna orci lacus odio ac risus auctor faucibus orci ligula massa luctus et ultrices posuere cubilia" })
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: image4,
            alt: "Logo",
            className: "object-contain px-4 py-8 md:px-4 md:py-4"
          }
        )
      ]
    }
  );
};
const Support = ({ ref }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 scroll-mt-32", ref, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-gray-800 bg-gray-100 text-center px-4 md:px-28 py-16 md:py-24 mt-16 md:mt-24", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-6xl font-bold", children: "Looking For Support?" }),
      /* @__PURE__ */ jsx("h4", { className: "text-sm text-gray-600 md:text-md mt-4", children: "Got a Question? We'd love to hear from you. Send us a message and we will respond you as soon as possible" })
    ] }),
    /* @__PURE__ */ jsxs("form", { action: "#", className: "mx-4 md:mx-28", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 w-full", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "your_name",
              className: "mb-2 block text-sm font-medium text-gray-900",
              children: "Your Name*"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 mt-4 md:mt-0  w-full", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "your_email",
              className: "mb-2 block text-sm font-medium text-gray-900",
              children: "Your Email"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500",
              placeholder: "name@gmail.com"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-end items-end w-full", children: [
        /* @__PURE__ */ jsx(
          "textarea",
          {
            rows: 6,
            className: "my-8 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
            placeholder: "Your Message...",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "max-w-48 rounded-sm bg-blue-600 px-6 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300",
            children: "Send Message"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("hr", { className: "h-px my-8 border-0 bg-gray-300" }),
        /* @__PURE__ */ jsxs("footer", { className: "text-center py-4 text-sm text-gray-500 flex-col md:flex justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "© 2024 ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Mania Puzzle" }),
            ". All Rights Reserved."
          ] }),
          /* @__PURE__ */ jsx("div", { children: "Privacy Policy | Terms of Service" })
        ] })
      ] })
    ] })
  ] });
};
const Feedback = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex-shrink-0 flex flex-col justify-center items-center text-gray-800 text-center px-4 md:px-28 py-8 md:py-16", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image4,
        alt: "Profile",
        className: "w-24 h-24 rounded-full object-cover"
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "text-lg md:text-2xl font-bold mt-4", children: "Michail David" }),
    /* @__PURE__ */ jsx("h4", { className: "text-sm italic text-gray-400 mt-4", children: "Orci nullam tempor sapien donec enim ipsum integer at porta justo odio vitae auctor vitae integer congue magna lacus odio ac risus auctor tempus magna" })
  ] });
};
const feedback = [1, 2, 3, 4];
const FeedbackCarousel = ({ ref }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedback.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col justify-center items-center my-8 scroll-mt-32",
      ref,
      children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-6xl font-bold text-gray-800", children: "Customers Feedback" }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex transition-transform duration-700 ease-in-out ",
              style: { transform: `translateX(-${current * 100}%)` },
              children: feedback.map((index) => /* @__PURE__ */ jsx(Feedback, {}, index))
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2", children: feedback.map((_, i) => /* @__PURE__ */ jsx(
            "button",
            {
              className: `w-2 h-2 rounded-full ${i === current ? "bg-gray-400" : "bg-gray-300"}`,
              onClick: () => setCurrent(i)
            },
            i
          )) })
        ] })
      ]
    }
  );
};
const logos = [
  {
    src: image4,
    alt: "Facebook"
  },
  {
    src: image4,
    alt: "Disney"
  },
  {
    src: image4,
    alt: "Airbnb"
  },
  {
    src: image4,
    alt: "Apple"
  }
];
const scrollAnimation = `
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;
const Carousel = ({
  ref
}) => {
  const logosRef = useRef(null);
  useEffect(() => {
    var _a;
    if (logosRef.current) {
      const clone = logosRef.current.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      (_a = logosRef.current.parentNode) == null ? void 0 : _a.appendChild(clone);
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "py-8 md:py-16 scroll-mt-32", ref, children: [
    /* @__PURE__ */ jsx("style", { children: scrollAnimation }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-6xl font-bold mt-4 text-gray-800 text-center", children: "Awesome Screenshots" }),
    /* @__PURE__ */ jsx("div", { className: "w-full inline-flex flex-nowrap mt-8 md:mt-24 overflow-hidden", children: /* @__PURE__ */ jsx(
      "ul",
      {
        ref: logosRef,
        className: "flex gap-x-4 md:gap-x-16 items-center justify-center md:justify-start [&_img]:max-w-none animate-[scroll_30s_linear_infinite]",
        children: logos.map((logo, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: logo.src,
            alt: logo.alt,
            className: "h-auto max-h-40 md:max-h-80"
          }
        ) }, idx))
      }
    ) })
  ] });
};
function Starting() {
  const aboutUs = useRef(null);
  const ourApps = useRef(null);
  const deviceSupport = useRef(null);
  const screens = useRef(null);
  const feedback2 = useRef(null);
  const contractUs = useRef(null);
  const scrollToSection = (section) => {
    var _a, _b, _c, _d, _e, _f;
    switch (section) {
      case "About Us":
        (_a = aboutUs.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Our Apps":
        (_b = ourApps.current) == null ? void 0 : _b.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Device Support":
        (_c = deviceSupport.current) == null ? void 0 : _c.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      case "Screens":
        (_d = screens.current) == null ? void 0 : _d.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Feedback":
        (_e = feedback2.current) == null ? void 0 : _e.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      case "Contact Us":
        (_f = contractUs.current) == null ? void 0 : _f.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Navbar,
      {
        onNavClick: (section) => {
          scrollToSection(section);
        }
      }
    ),
    /* @__PURE__ */ jsx("img", { src: background, alt: "Logo", className: "object-contain absolute" }),
    /* @__PURE__ */ jsx(BestApp, {}),
    /* @__PURE__ */ jsx(OurCompany, { ref: aboutUs }),
    /* @__PURE__ */ jsx(AppsAndGames, { ref: ourApps }),
    /* @__PURE__ */ jsx(GameList, {}),
    /* @__PURE__ */ jsx(SupportedDevices, { ref: deviceSupport }),
    /* @__PURE__ */ jsx(Carousel, { ref: screens }),
    ";",
    /* @__PURE__ */ jsx(FeedbackCarousel, { ref: feedback2 }),
    /* @__PURE__ */ jsx(Support, { ref: contractUs })
  ] });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Starting, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function loader() {
  return redirect("/");
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BMV4REGB.js", "imports": ["/assets/chunk-C37GKA54-giZvu9w9.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-Bpd0ebL4.js", "imports": ["/assets/chunk-C37GKA54-giZvu9w9.js"], "css": ["/assets/root-Z5sUBdJm.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Cw_bhTAh.js", "imports": ["/assets/chunk-C37GKA54-giZvu9w9.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/redirect-to-home": { "id": "routes/redirect-to-home", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/redirect-to-home-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-84613866.js", "version": "84613866", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/redirect-to-home": {
    id: "routes/redirect-to-home",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
