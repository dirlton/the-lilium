(window.webpackJsonp=window.webpackJsonp||[]).push([[31,2,3,4],Array(234).concat([function(e,t,o){"use strict";o.r(t);o(30);var r={data:function(){return{enquiry:"",name:"",mobile:"",email:"",message:"",isAppointment:"",errors:"",success:!1,policyIsAgree:"",send_brochure:""}},methods:{send:function(){var e=this;(this.errors=[],this.mobile)&&(("65"!==this.mobile.substring(0,2)||this.mobile.length<=7)&&this.errors.push({mobile:"The mobile field contains an invalid number."}));this.isAppointment||this.errors.push({isAppointment:"The make appt field is required."}),this.errors.length||Email.send({Host:"smtp.gmail.com",Username:"gdpropertysg@gmail.com",Password:"igijvzbvkstusyph",To:"gdpropertysg@gmail.com",From:this.email,Subject:"The Lilium "+this.enquiry,Body:"<b>Name: </b>"+this.name+"<br><b> Message: </b>"+this.message+"<br><b>Mobile: </b>"+this.mobile+"<br><b>Appointment: </b>"+this.isAppointment}).then((function(){e.success=!0,e.reset()}))},reset:function(){this.enquiry="",this.name="",this.mobile="",this.email="",this.message="",this.isAppointment="",this.errors="",this.policyIsAgree="",this.send_brochure=""}}},n=o(13),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"space-y-6"},[o("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.send.apply(null,arguments)}}},[o("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},[o("div",{staticClass:"sm:col-span-2"},[o("label",{staticClass:"\n            inline-flex\n            items-center\n            w-full\n            p-4\n            font-medium\n            text-gray-600\n            border\n            rounded-lg\n            border-theme-100\n            bg-theme-50\n          ",attrs:{for:"send_brochure"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.send_brochure,expression:"send_brochure"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{id:"send_brochure",type:"checkbox"},domProps:{checked:Array.isArray(e.send_brochure)?e._i(e.send_brochure,null)>-1:e.send_brochure},on:{change:function(t){var o=e.send_brochure,r=t.target,n=!!r.checked;if(Array.isArray(o)){var c=e._i(o,null);r.checked?c<0&&(e.send_brochure=o.concat([null])):c>-1&&(e.send_brochure=o.slice(0,c).concat(o.slice(c+1)))}else e.send_brochure=n}}}),e._v(" "),o("span",{staticClass:"ml-2"},[e._v("Send me E-Brochure, Floor Plan & Pricing now")])])]),e._v(" "),o("div",[e._m(0),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.enquiry,expression:"enquiry"}],staticClass:"form-input",attrs:{id:"enquiry",required:"required"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.enquiry=t.target.multiple?o:o[0]}}},[o("option",[e._v("Financing")]),e._v(" "),o("option",[e._v("Purchase")]),e._v(" "),o("option",[e._v("View Showflat")]),e._v(" "),o("option",[e._v("I want to purchase, but I have an existing property to sell")]),e._v(" "),o("option",[e._v("Decoupling")]),e._v(" "),o("option",[e._v("CPF Fund Usage")]),e._v(" "),o("option",[e._v("Loan Eligibility (LTV)")]),e._v(" "),o("option",[e._v("Total Debt Servicing Ratio (TDSR)")]),e._v(" "),o("option",[e._v("Additional Buyer Stamp Duty (ABSD)")]),e._v(" "),o("option",[e._v("I want updates only")]),e._v(" "),o("option",[e._v("Others")])])]),e._v(" "),o("div",[e._m(1),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"uppercase form-input",attrs:{id:"name",type:"text",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),o("div",[e._m(2),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"lowercase form-input",attrs:{id:"mobile",type:"number",required:"required"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),e._l(e.errors,(function(t,r){return o("div",{key:r},e._l(t,(function(t,r){return o("div",{key:r},["mobile"===r?o("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n              "+e._s(t)+"\n            ")]):e._e()])})),0)}))],2),e._v(" "),o("div",[e._m(3),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{id:"email",type:"email",required:"required"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Message")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-input",domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"sm:col-span-2"},[e._m(4),e._v(" "),o("div",{staticClass:"space-y-2"},[o("label",{staticClass:"flex items-center"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"Would like to make an appointment."},domProps:{checked:e._q(e.isAppointment,"Would like to make an appointment.")},on:{change:function(t){e.isAppointment="Would like to make an appointment."}}}),e._v("\n            I have some questions and I would like to make an appointment to\n            discuss in details.\n          ")]),e._v(" "),o("label",{staticClass:"flex items-center"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"No appointment required."},domProps:{checked:e._q(e.isAppointment,"No appointment required.")},on:{change:function(t){e.isAppointment="No appointment required."}}}),e._v("\n            No appointment required for now.\n          ")]),e._v(" "),e._l(e.errors,(function(t,r){return o("div",{key:r},e._l(t,(function(t,r){return o("div",{key:r},["isAppointment"===r?o("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n                "+e._s(t)+"\n              ")]):e._e()])})),0)}))],2)]),e._v(" "),o("div",{staticClass:"sm:col-span-2"},[e._m(5),e._v(" "),o("label",{staticClass:"inline-flex items-center"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.policyIsAgree,expression:"policyIsAgree"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{type:"checkbox",value:"1",required:"required"},domProps:{checked:Array.isArray(e.policyIsAgree)?e._i(e.policyIsAgree,"1")>-1:e.policyIsAgree},on:{change:function(t){var o=e.policyIsAgree,r=t.target,n=!!r.checked;if(Array.isArray(o)){var c=e._i(o,"1");r.checked?c<0&&(e.policyIsAgree=o.concat(["1"])):c>-1&&(e.policyIsAgree=o.slice(0,c).concat(o.slice(c+1)))}else e.policyIsAgree=n}}}),e._v(" "),o("span",{staticClass:"ml-2"},[e._v("I have read and agree to the\n            "),o("NuxtLink",{staticClass:"font-medium underline text-theme-600",attrs:{to:"/privacy-policy"}},[e._v("Privacy Policy")])],1)])])]),e._v(" "),o("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        text-white\n        uppercase\n        transition\n        bg-gray-800\n        border border-transparent\n        rounded-md\n        hover:bg-gray-700\n        active:bg-gray-900\n        focus:outline-none focus:border-gray-900 focus:shadow-outline-gray\n        disabled:opacity-25\n      "},[e._v("\n      Submit\n    ")]),e._v(" "),o("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        uppercase\n        transition\n        border border-transparent border-gray-800\n        rounded-md\n        hover:border-theme-700 hover:text-theme-700\n        focus:outline-none focus:shadow-outline-gray\n        disabled:opacity-25\n      ",on:{click:function(t){return t.preventDefault(),e.reset.apply(null,arguments)}}},[e._v("\n      Reset\n    ")])]),e._v(" "),o("div",[e.errors.length?o("div",{staticClass:"flex items-center p-4 border rounded-lg bg-red-100"},[o("svg",{staticClass:"w-8 h-8 mr-2 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"}})]),e._v(" "),o("div",{staticClass:"select-none"},[e._v("\n        The given data was invalid.\n        "),e._l(e.errors,(function(t,r){return o("div",{key:r},e._l(t,(function(t,r){return o("div",{key:r},[o("p",[e._v(e._s(t))])])})),0)}))],2)]):e.success?o("div",{staticClass:"flex items-center p-4 border rounded-lg bg-green-100"},[o("svg",{staticClass:"w-8 h-8 mr-2 text-green-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"}}),e._v(" "),o("path",{attrs:{d:"M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"}})]),e._v(" "),e._m(6)]):e._e()])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"enquiry"}},[e._v("Enquiry"),o("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"name"}},[e._v("Name"),o("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"mobile"}},[e._v("Mobile"),o("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"email"}},[e._v("Email"),o("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"make_appt"}},[e._v("Make an Appointment?"),o("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Acceptance of Privacy Policy"),o("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"select-none"},[e._v("\n        Thank you for your enquiry, we will respond to your request soon.\n        "),o("div")])}],!1,null,null,null);t.default=component.exports},function(e,t,o){var content=o(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(40).default)("3284173e",content,!0,{sourceMap:!1})},function(e,t,o){e.exports=o.p+"img/book-an-appointment.02f0f96.jpg"},function(e,t,o){"use strict";o(235)},function(e,t,o){var r=o(39)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},function(e,t,o){"use strict";o.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-4 prose bg-gray-200 sm:order-2 md:w-1/2"},[r("img",{staticClass:"w-full",attrs:{src:o(236),alt:"Book An Appointment"}}),e._v(" "),r("p",[e._v("\n            Book An Appointment to view ShowFlat & get VVIP Discounts\n            (Limited Time), Direct Developer Price, & Hardcopy E-Brochure.\n            Guaranteed with Best Price Possible.\n          ")]),e._v(" "),r("p",[e._v("OR")]),e._v(" "),r("p",[e._v("\n            Fill up the form on the left and get a copy of Price, E-Brochure,\n            and Latest Updates!\n          ")]),e._v(" "),r("p",[e._v("Strictly no spam policy.")])])}],n={components:{FormBookAppoinment:o(234).default}},c=(o(237),o(13)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"pb-12"},[o("div",{staticClass:"bg-theme-300 pb-96"}),e._v(" "),o("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-80"},[o("div",{staticClass:"overflow-hidden bg-white rounded-md shadow-lg"},[o("div",{staticClass:"flex flex-wrap"},[e._m(0),e._v(" "),o("div",{staticClass:"p-4 md:order-1 md:w-1/2"},[o("section",{staticClass:"space-y-6"},[o("form-book-appoinment")],1)])])])])])}),r,!1,null,"2a89c52a",null);t.default=component.exports;installComponents(component,{FormBookAppoinment:o(234).default})},function(e,t,o){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,o=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var t=e.event,o=e.handler;(0,e.middleware)(t)&&o(t)}function r(e,t){var r=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||o,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(t.value),n=r.handler,c=r.middleware,a=r.detectIframe;if(r.isActive){if(e["__v-click-outside"]=r.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(e){var t=e.el,o=e.event,r=e.handler,n=e.middleware,c=o.path||o.composedPath&&o.composedPath();(c?c.indexOf(t)<0:!t.contains(o.target))&&i({event:o,handler:r,middleware:n})}({el:e,event:t,handler:n,middleware:c})}}})),a){var l={event:"blur",srcTarget:window,handler:function(t){return function(e){var t=e.el,o=e.event,r=e.handler,n=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:o,handler:r,middleware:n})}),0)}({el:e,event:t,handler:n,middleware:c})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[l])}e["__v-click-outside"].forEach((function(t){var o=t.event,i=t.srcTarget,r=t.handler;return setTimeout((function(){e["__v-click-outside"]&&i.addEventListener(o,r,!1)}),0)}))}}function n(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var c=e?{bind:r,update:function(e,t){var o=t.value,i=t.oldValue;JSON.stringify(o)!==JSON.stringify(i)&&(n(e),r(e,{value:o}))},unbind:n}:{};return{install:function(e){e.directive("click-outside",c)},directive:c}}()},function(e,t,o){e.exports=o.p+"img/Gazania_50m_Lap_Pool-1024x576.5713926.jpg"},function(e,t,o){e.exports=o.p+"img/Gazania_50m_Lap_Pool_Water_Wall-1024x576.eeefc78.jpg"},function(e,t,o){e.exports=o.p+"img/Gazania_Grand_Arrival_Plaza-1-1024x576.c3436a5.jpg"},function(e,t,o){e.exports=o.p+"img/Gazania_Hero_Shot-1-1024x576.32fe018.jpg"},function(e,t,o){e.exports=o.p+"img/Gazania_Water_Wall-1024x576.60f7ca1.jpg"},function(e,t,o){e.exports=o.p+"img/Gazania__Clubhouse-1024x576.e113695.jpg"},function(e,t,o){e.exports=o.p+"img/Gazania_outdoor_Fitness_area_Kids_Playground_and_pavilion-1024x576.9a7f3b1.jpg"},function(e,t,o){e.exports=o.p+"img/The-Lilium-Perspective-1-1024x504.cd9f5df.jpg"},function(e,t,o){e.exports=o.p+"img/The-Lilium-Perspective-2-1024x456.1f4db8c.jpg"},function(e,t,o){e.exports=o.p+"img/The-Lilium-Perspective-3-1024x366.a9e1d00.jpg"},function(e,t,o){e.exports=o.p+"img/The-Lilium-Perspective-4-1024x456.8205cb8.jpg"},function(e,t,o){e.exports=o.p+"img/The-Lilium-Perspective-5-1024x456.66bbcfe.jpg"},function(e,t,o){e.exports=o.p+"img/The-Lilium-Perspective-6-1024x456.02d8077.jpg"},function(e,t,o){e.exports=o.p+"img/the-gazania-condo-playground-singapore-1024x576.a5a5b17.jpeg"},function(e,t,o){e.exports=o.p+"img/the-gazania-singapore-spa-pool-1024x576.e59d41b.jpg"},function(e,t,o){e.exports=o.p+"img/The-Lilium-Perspective-3.11ccf73.jpg"},function(e,t,o){e.exports=o.p+"img/home-best-price.64ac258.jpg"},function(e,t,o){e.exports=o.p+"img/home-book-appointment-1.8a3a8ce.jpg"},function(e,t,o){e.exports=o.p+"img/home-floor-plan.571b776.jpg"},function(e,t,o){e.exports=o.p+"img/tablet.461cce4.png"},function(e,t,o){e.exports=o.p+"img/bidadari.913680a.jpg"},function(e,t,o){e.exports=o.p+"img/bidadari-1.654273b.jpg"},function(e,t,o){e.exports=o.p+"img/bidadari-2.1da167c.jpg"},function(e,t,o){e.exports=o.p+"img/bidadari-estate-plan-1024x537.ade28b1.jpg"},function(e,t,o){e.exports=o.p+"img/bidadari-heritage-walk-1024x457.b2dc20f.jpg"},function(e,t,o){e.exports=o.p+"img/Bidadari-bus-interchange.ab26ed1.jpg"},function(e,t,o){e.exports=o.p+"img/crl-singapore-map-1024x606.13832bf.jpg"},function(e,t,o){e.exports=o.p+"img/why-build-the-crl-singapore-724x1024.2313349.jpg"},function(e,t,o){e.exports=o.p+"img/the-gazania-lilium-logo-300x300.68f2093.png"},function(e,t,o){e.exports=o.p+"img/Awards.34f766a.png"},function(e,t,o){e.exports=o.p+"img/track-record-1.5f31968.jpg"},function(e,t,o){e.exports=o.p+"img/track-record-2.dbac72f.jpg"},function(e,t,o){e.exports=o.p+"img/track-record-3.25be748.jpg"},function(e,t,o){e.exports=o.p+"img/track-record-4.c9b4c9c.png"},function(e,t,o){e.exports=o.p+"img/track-record-5.d8be07b.jpg"},function(e,t,o){e.exports=o.p+"img/track-record-6.dd14f2e.png"},function(e,t,o){e.exports=o.p+"img/front-cover-the-lilium.2298175.png"},function(e,t,o){e.exports=o.p+"img/The-Lilium-Site-Plan-Singapore.0f16424.jpg"},function(e,t,o){e.exports=o.p+"img/gazania-site-plan.2a8ad22.jpg"},function(e,t,o){e.exports=o.p+"img/home-artist-impression-thumb-1.7681ea8.jpg"},function(e,t,o){e.exports=o.p+"img/home-artist-impression-thumb-2.6be98fd.jpg"},function(e,t,o){e.exports=o.p+"img/home-artist-impression-thumb-3.36aae7f.jpg"},function(e,t,o){e.exports=o.p+"img/home-artist-impression-thumb-4.39d2e65.jpg"},function(e,t,o){e.exports=o.p+"img/map-location-thelilium.8d02a64.png"},function(e,t,o){e.exports=o.p+"img/showflat-thelilium.394b0e3.png"},function(e,t,o){e.exports=o.p+"img/singhaiyi-logo.a6c7b46.jpg"},function(e,t,o){e.exports=o.p+"img/location-map-gazania.1f8a440.jpg"},function(e,t,o){e.exports=o.p+"img/location-map-lilium.5d9003b.png"},function(e,t,o){e.exports=o.p+"img/press-1.1.2941acd.png"},function(e,t,o){e.exports=o.p+"img/press-1.2.e3b7b08.png"},function(e,t,o){e.exports=o.p+"img/press-2.0.a47486f.jpg"},function(e,t,o){e.exports=o.p+"img/press-2.08b5cda.jpg"},function(e,t,o){e.exports=o.p+"img/press-3.1.3cd216d.png"},function(e,t,o){e.exports=o.p+"img/press-3.66236a9.jpg"},function(e,t,o){e.exports=o.p+"img/press-4.01.442bbe0.jpg"},function(e,t,o){e.exports=o.p+"img/press-4.02.414eb30.png"},function(e,t,o){e.exports=o.p+"img/press-5.1.65924f2.png"},function(e,t,o){e.exports=o.p+"img/press-5.2.6653a2d.jpg"},function(e,t,o){e.exports=o.p+"img/press-five.d444cfb.png"},function(e,t,o){e.exports=o.p+"img/press-four.383428f.jpg"},function(e,t,o){e.exports=o.p+"img/press1-1.66a0aeb.jpg"},function(e,t,o){e.exports=o.p+"img/the-gazania-ebrochure.1be569e.png"},function(e,t,o){e.exports=o.p+"img/payar-lebar1.5b8e174.png"},function(e,t,o){e.exports=o.p+"img/the-serangoon-master-plan1.723ad26.png"},function(e,t,o){e.exports=o.p+"img/the-serangoon-master-plan2.2959e44.png"},function(e,t,o){e.exports=o.p+"img/the-serangoon-master-plan3.f689c3d.png"},function(e,t,o){var map={"./2-bed-b1.png":308,"./2-bed-study-b2.png":309,"./2-bed-study-b3.png":310,"./3bed-c1.png":311,"./3bed-c2.png":312,"./4-bed-type-d1.png":313,"./4-bed-type-d2.png":314,"./Awards.png":270,"./SmartSelect_20190413-171457_Adobe-Acrobat.jpg":315,"./SmartSelect_20190413-171525_Adobe-Acrobat.jpg":316,"./SmartSelect_20190413-171544_Adobe-Acrobat.jpg":317,"./SmartSelect_20190413-171620_Adobe-Acrobat.jpg":318,"./SmartSelect_20190413-171636_Adobe-Acrobat.jpg":319,"./SmartSelect_20190413-171806_Adobe-Acrobat.jpg":320,"./SmartSelect_20190413-171842_Adobe-Acrobat.jpg":321,"./SmartSelect_20190413-171900_Adobe-Acrobat.jpg":322,"./SmartSelect_20190413-171955_Adobe-Acrobat.jpg":323,"./SmartSelect_20190413-172015_Adobe-Acrobat.jpg":324,"./SmartSelect_20190413-172059_Adobe-Acrobat.jpg":325,"./SmartSelect_20190413-172239_Adobe-Acrobat.jpg":326,"./SmartSelect_20190413-172248_Adobe-Acrobat.jpg":327,"./SmartSelect_20190413-172359_Adobe-Acrobat.jpg":328,"./SmartSelect_20190413-172433_Adobe-Acrobat.jpg":329,"./SmartSelect_20190413-172449_Adobe-Acrobat.jpg":330,"./SmartSelect_20190413-172542_Adobe-Acrobat.jpg":331,"./SmartSelect_20190413-172625_Adobe-Acrobat.jpg":332,"./SmartSelect_20190413-172719_Adobe-Acrobat.jpg":333,"./SmartSelect_20190413-172751_Adobe-Acrobat.jpg":334,"./SmartSelect_20190413-172806_Adobe-Acrobat.jpg":335,"./SmartSelect_20190413-172856_Adobe-Acrobat.jpg":336,"./The-Lilium-Site-Plan-Singapore.jpg":278,"./book-an-appointment.jpg":236,"./developer/track-record-1.jpg":271,"./developer/track-record-2.jpg":272,"./developer/track-record-3.jpg":273,"./developer/track-record-4.jpg":337,"./developer/track-record-4.png":274,"./developer/track-record-5.jpg":275,"./developer/track-record-6.png":276,"./front-cover-the-lilium.png":277,"./gallery/Gazania_50m_Lap_Pool-1024x576.jpg":241,"./gallery/Gazania_50m_Lap_Pool_Water_Wall-1024x576.jpg":242,"./gallery/Gazania_Grand_Arrival_Plaza-1-1024x576.jpg":243,"./gallery/Gazania_Hero_Shot-1-1024x576.jpg":244,"./gallery/Gazania_Water_Wall-1024x576.jpg":245,"./gallery/Gazania__Clubhouse-1024x576.jpg":246,"./gallery/Gazania_outdoor_Fitness_area_Kids_Playground_and_pavilion-1024x576.jpg":247,"./gallery/The-Lilium-Perspective-1-1024x504.jpg":248,"./gallery/The-Lilium-Perspective-2-1024x456.jpg":249,"./gallery/The-Lilium-Perspective-3-1024x366.jpg":250,"./gallery/The-Lilium-Perspective-4-1024x456.jpg":251,"./gallery/The-Lilium-Perspective-5-1024x456.jpg":252,"./gallery/The-Lilium-Perspective-6-1024x456.jpg":253,"./gallery/the-gazania-condo-playground-singapore-1024x576.jpeg":254,"./gallery/the-gazania-singapore-spa-pool-1024x576.jpg":255,"./gazania-site-plan.jpg":279,"./home/The-Lilium-Perspective-3.jpg":256,"./home/banner-main1.jpg":338,"./home/home-artist-impression-thumb-1.jpg":280,"./home/home-artist-impression-thumb-2.jpg":281,"./home/home-artist-impression-thumb-3.jpg":282,"./home/home-artist-impression-thumb-4.jpg":283,"./home/home-best-price.jpg":257,"./home/home-book-appointment-1.jpg":258,"./home/home-book-appointment.jpg":339,"./home/home-floor-plan.jpg":259,"./home/map-location-thelilium.png":284,"./home/showflat-thelilium.png":285,"./home/singhaiyi-logo.jpg":286,"./home/tablet.png":260,"./location-map-gazania.jpg":287,"./location-map-lilium.png":288,"./press/press-1.1.png":289,"./press/press-1.2.png":290,"./press/press-2.0.jpg":291,"./press/press-2.jpg":292,"./press/press-3.1.png":293,"./press/press-3.jpg":294,"./press/press-4.01.jpg":295,"./press/press-4.02.png":296,"./press/press-5.1.png":297,"./press/press-5.2.jpg":298,"./press/press-five.png":299,"./press/press-four.jpg":300,"./press/press1-1.jpg":301,"./singhaiyi.png":170,"./the-gazania-ebrochure.png":302,"./the-gazania-lilium-logo-300x300.png":269,"./type-d1.png":340,"./type-d2.png":341,"./type-ph1-lower.png":342,"./type-ph1-upper.png":343,"./type-ph2-lower.png":344,"./type-ph2-upper.png":345,"./type-ph3-lower.png":346,"./type-ph3-upper.png":347,"./ura/Bidadari-bus-interchange.jpg":266,"./ura/bidadari-1.jpg":262,"./ura/bidadari-2.jpg":263,"./ura/bidadari-estate-plan-1024x537.jpg":264,"./ura/bidadari-heritage-walk-1024x457.jpg":265,"./ura/bidadari.jpg":261,"./ura/central-area-ura-masterplan-1.png":348,"./ura/crl-singapore-map-1024x606.jpg":267,"./ura/payar-lebar1.png":303,"./ura/the-serangoon-master-plan1.png":304,"./ura/the-serangoon-master-plan2.png":305,"./ura/the-serangoon-master-plan3.png":306,"./ura/why-build-the-crl-singapore-724x1024.jpg":268};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=307},function(e,t,o){e.exports=o.p+"img/2-bed-b1.1cb21c7.png"},function(e,t,o){e.exports=o.p+"img/2-bed-study-b2.adc916c.png"},function(e,t,o){e.exports=o.p+"img/2-bed-study-b3.70298a8.png"},function(e,t,o){e.exports=o.p+"img/3bed-c1.fb70927.png"},function(e,t,o){e.exports=o.p+"img/3bed-c2.950f7dd.png"},function(e,t,o){e.exports=o.p+"img/4-bed-type-d1.22635de.png"},function(e,t,o){e.exports=o.p+"img/4-bed-type-d2.cfba734.png"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-171457_Adobe-Acrobat.e931f1a.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-171525_Adobe-Acrobat.d79b445.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-171544_Adobe-Acrobat.a6ddaa5.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-171620_Adobe-Acrobat.a98379c.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-171636_Adobe-Acrobat.8b81471.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-171806_Adobe-Acrobat.9a3efca.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-171842_Adobe-Acrobat.8859d30.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-171900_Adobe-Acrobat.aa4cb5f.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-171955_Adobe-Acrobat.2d32bc0.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172015_Adobe-Acrobat.aa190d3.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172059_Adobe-Acrobat.0b00f92.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172239_Adobe-Acrobat.77bfac6.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172248_Adobe-Acrobat.fa161e3.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172359_Adobe-Acrobat.002e504.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172433_Adobe-Acrobat.aa7bd25.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172449_Adobe-Acrobat.0c32b09.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172542_Adobe-Acrobat.c42f26c.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172625_Adobe-Acrobat.ca8aad2.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172719_Adobe-Acrobat.24681a6.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172751_Adobe-Acrobat.c826264.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172806_Adobe-Acrobat.5dd3bff.jpg"},function(e,t,o){e.exports=o.p+"img/SmartSelect_20190413-172856_Adobe-Acrobat.71cdada.jpg"},function(e,t,o){e.exports=o.p+"img/track-record-4.24b6d45.jpg"},function(e,t,o){e.exports=o.p+"img/banner-main1.d94fdfb.jpg"},function(e,t,o){e.exports=o.p+"img/home-book-appointment.8d72b71.jpg"},function(e,t,o){e.exports=o.p+"img/type-d1.b59e061.png"},function(e,t,o){e.exports=o.p+"img/type-d2.16f813e.png"},function(e,t,o){e.exports=o.p+"img/type-ph1-lower.7a80c8d.png"},function(e,t,o){e.exports=o.p+"img/type-ph1-upper.1feed9b.png"},function(e,t,o){e.exports=o.p+"img/type-ph2-lower.53abbcd.png"},function(e,t,o){e.exports=o.p+"img/type-ph2-upper.67655ac.png"},function(e,t,o){e.exports=o.p+"img/type-ph3-lower.64b3a59.png"},function(e,t,o){e.exports=o.p+"img/type-ph3-upper.a91ce6c.png"},function(e,t,o){e.exports=o.p+"img/central-area-ura-masterplan-1.045d7e1.png"},,,function(e,t,o){"use strict";o.r(t);var r=o(240),n={name:"LargeModal",directives:{clickOutside:o.n(r).a.directive},props:{image:{type:String,default:""},bedRoomProp:{type:Array,default:function(){return[]}}},data:function(){return{showModal:!1,bedRooms:this.bedRoomProp,imageUrl:""}},computed:{},methods:{toggleModal:function(e){this.imageUrl=e,this.showModal=!this.showModal,this.Modal=!this.$emit("isModal",this.Modal)},externalClick:function(){this.showModal=!1},imageSource:function(e){return o(307)("./".concat(e))}}},c=o(13),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"grid grid-cols-2 gap-2 sm:gap-6 sm:grid-cols-3"},[e._l(e.bedRooms,(function(t,r){return o("div",{key:r,staticClass:"space-y-1 cursor-pointer",on:{click:function(o){return e.toggleModal(t.url)}}},[o("img",{staticClass:"mx-auto rounded  w-2/3",attrs:{src:e.imageSource(t.url),alt:""}}),e._v(" "),o("p",{staticClass:"text-center"},[e._v(e._s(t.title))])])})),e._v(" "),e.showModal?o("div",{staticClass:"\n      fixed\n      inset-0\n      z-50\n      outline-none\n      focus:outline-none\n      justify-center\n      items-center\n      flex\n      overscroll-y-contain\n      overflow-auto\n    "},[o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.externalClick,expression:"externalClick"}],staticClass:"relative w-auto my-auto mx-auto max-w-6xl"},[o("div",{staticClass:"\n          border-0\n          rounded-lg\n          shadow-lg\n          relative\n          flex flex-col\n          w-full\n          bg-white\n          outline-none\n          focus:outline-none\n        "},[o("div",{staticClass:"relative p-6 flex-auto"},[o("img",{staticClass:"mx-auto rounded",attrs:{src:e.imageSource(e.imageUrl),alt:""}})])])])]):e._e(),e._v(" "),e.showModal?o("div",{staticClass:"opacity-25 fixed inset-0 z-40 bg-black"}):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},,,,,,,,,,,,,,,,,,,,,,function(e,t,o){"use strict";o.r(t);var r={data:function(){return{OneBedroom:[{title:"Type A1",url:"SmartSelect_20190413-171457_Adobe-Acrobat.jpg"},{title:"Type A2",url:"SmartSelect_20190413-171525_Adobe-Acrobat.jpg"},{title:"Type A4",url:"SmartSelect_20190413-171544_Adobe-Acrobat.jpg"}],TwoBedroom:[{title:"Type B1",url:"SmartSelect_20190413-171620_Adobe-Acrobat.jpg"},{title:"Type B2",url:"SmartSelect_20190413-171636_Adobe-Acrobat.jpg"},{title:"Type B8",url:"SmartSelect_20190413-171900_Adobe-Acrobat.jpg"}],TwoBedroomStudy:[{title:"Type B6",url:"SmartSelect_20190413-171806_Adobe-Acrobat.jpg"},{title:"Type B7",url:"SmartSelect_20190413-171842_Adobe-Acrobat.jpg"}],ThreeBedroom:[{title:"Type C7",url:"SmartSelect_20190413-171955_Adobe-Acrobat.jpg"},{title:"Type C6",url:"SmartSelect_20190413-172015_Adobe-Acrobat.jpg"}],ThreeBedroomPremium:[{title:"Type C1",url:"SmartSelect_20190413-172059_Adobe-Acrobat.jpg"},{title:"Type C2",url:"SmartSelect_20190413-172239_Adobe-Acrobat.jpg"},{title:"Type C3",url:"SmartSelect_20190413-172248_Adobe-Acrobat.jpg"}],FourBedroom:[{title:"Type D1A - DIC",url:"SmartSelect_20190413-172359_Adobe-Acrobat.jpg"},{title:"Type D2",url:"SmartSelect_20190413-172433_Adobe-Acrobat.jpg"},{title:"Type D3B",url:"SmartSelect_20190413-172449_Adobe-Acrobat.jpg"},{title:"Type D6A",url:"SmartSelect_20190413-172542_Adobe-Acrobat.jpg"}],FourBedroomMezzanine:[{title:"Type D1CM",url:"SmartSelect_20190413-172625_Adobe-Acrobat.jpg"},{title:"Type D6AM",url:"SmartSelect_20190413-172719_Adobe-Acrobat.jpg"}],FourBedroomPenthouse:[{title:"Type PH1",url:"SmartSelect_20190413-172751_Adobe-Acrobat.jpg"},{title:"Type PH2",url:"SmartSelect_20190413-172806_Adobe-Acrobat.jpg"},{title:"Type PH7",url:"SmartSelect_20190413-172856_Adobe-Acrobat.jpg"}]}}},n=o(13),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),e._v(" "),o("section",[o("div",{staticClass:"max-w-6xl px-4 py-12 mx-auto space-y-12"},[o("div",{staticClass:"space-y-4"},[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          1 Bedroom\n        ")]),e._v(" "),o("BedroomImageModal",{attrs:{"bed-room-prop":e.OneBedroom}})],1),e._v(" "),o("div",{staticClass:"space-y-4"},[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          2 Bedroom\n        ")]),e._v(" "),o("BedroomImageModal",{attrs:{"bed-room-prop":e.TwoBedroom}})],1),e._v(" "),o("div",{staticClass:"space-y-4"},[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          2 Bedroom + Study\n        ")]),e._v(" "),o("BedroomImageModal",{attrs:{"bed-room-prop":e.TwoBedroomStudy}})],1),e._v(" "),o("div",{staticClass:"space-y-4"},[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          3 Bedroom\n        ")]),e._v(" "),o("BedroomImageModal",{attrs:{"bed-room-prop":e.ThreeBedroom}})],1),e._v(" "),o("div",{staticClass:"space-y-4"},[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          3 Bedroom Premium\n        ")]),e._v(" "),o("BedroomImageModal",{attrs:{"bed-room-prop":e.ThreeBedroomPremium}})],1),e._v(" "),o("div",{staticClass:"space-y-4"},[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          4 Bedroom\n        ")]),e._v(" "),o("BedroomImageModal",{attrs:{"bed-room-prop":e.FourBedroom}})],1),e._v(" "),o("div",{staticClass:"space-y-4"},[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          4 Bedroom Mezzanine\n        ")]),e._v(" "),o("BedroomImageModal",{attrs:{"bed-room-prop":e.FourBedroomMezzanine}})],1),e._v(" "),o("div",{staticClass:"space-y-4"},[o("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          Penthouse\n        ")]),e._v(" "),o("BedroomImageModal",{attrs:{"bed-room-prop":e.FourBedroomPenthouse}})],1),e._v(" "),o("section",{staticClass:"py-6"},[o("NuxtLink",{staticClass:"\n            inline-flex\n            items-center\n            justify-center\n            w-full\n            px-3\n            py-3\n            text-white\n            transition\n            rounded\n            sm:px-0\n            hover:bg-theme-900\n            bg-theme-700\n          ",attrs:{to:"/gazania/pricing"}},[e._v("\n          Continue To Pricing\n          "),o("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M13 6l6 6-6 6M5 6l6 6-6 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)])]),e._v(" "),o("BookAppointment")],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"py-12 select-none bg-theme-700"},[o("div",{staticClass:"text-xl font-semibold text-center text-white sm:text-4xl"},[e._v("\n      Floor Plan\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{BedroomImageModal:o(351).default,BookAppointment:o(239).default})}])]);