(window.webpackJsonp=window.webpackJsonp||[]).push([[25,2,3,4],Array(234).concat([function(e,t,n){"use strict";n.r(t);n(30);var o={data:function(){return{enquiry:"",name:"",mobile:"",email:"",message:"",isAppointment:"",errors:"",success:!1,policyIsAgree:"",send_brochure:""}},methods:{send:function(){var e=this;(this.errors=[],this.mobile)&&(("65"!==this.mobile.substring(0,2)||this.mobile.length<=7)&&this.errors.push({mobile:"The mobile field contains an invalid number."}));this.isAppointment||this.errors.push({isAppointment:"The make appt field is required."}),this.errors.length||Email.send({Host:"smtp.gmail.com",Username:"gdpropertysg@gmail.com",Password:"igijvzbvkstusyph",To:"gdpropertysg@gmail.com",From:this.email,Subject:"The Lilium "+this.enquiry,Body:"<b>Name: </b>"+this.name+"<br><b> Message: </b>"+this.message+"<br><b>Mobile: </b>"+this.mobile+"<br><b>Appointment: </b>"+this.isAppointment}).then((function(){e.success=!0,e.reset()}))},reset:function(){this.enquiry="",this.name="",this.mobile="",this.email="",this.message="",this.isAppointment="",this.errors="",this.policyIsAgree="",this.send_brochure=""}}},r=n(13),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"space-y-6"},[n("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.send.apply(null,arguments)}}},[n("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},[n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"\n            inline-flex\n            items-center\n            w-full\n            p-4\n            font-medium\n            text-gray-600\n            border\n            rounded-lg\n            border-theme-100\n            bg-theme-50\n          ",attrs:{for:"send_brochure"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.send_brochure,expression:"send_brochure"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{id:"send_brochure",type:"checkbox"},domProps:{checked:Array.isArray(e.send_brochure)?e._i(e.send_brochure,null)>-1:e.send_brochure},on:{change:function(t){var n=e.send_brochure,o=t.target,r=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&(e.send_brochure=n.concat([null])):c>-1&&(e.send_brochure=n.slice(0,c).concat(n.slice(c+1)))}else e.send_brochure=r}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("Send me E-Brochure, Floor Plan & Pricing now")])])]),e._v(" "),n("div",[e._m(0),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.enquiry,expression:"enquiry"}],staticClass:"form-input",attrs:{id:"enquiry",required:"required"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.enquiry=t.target.multiple?n:n[0]}}},[n("option",[e._v("Financing")]),e._v(" "),n("option",[e._v("Purchase")]),e._v(" "),n("option",[e._v("View Showflat")]),e._v(" "),n("option",[e._v("I want to purchase, but I have an existing property to sell")]),e._v(" "),n("option",[e._v("Decoupling")]),e._v(" "),n("option",[e._v("CPF Fund Usage")]),e._v(" "),n("option",[e._v("Loan Eligibility (LTV)")]),e._v(" "),n("option",[e._v("Total Debt Servicing Ratio (TDSR)")]),e._v(" "),n("option",[e._v("Additional Buyer Stamp Duty (ABSD)")]),e._v(" "),n("option",[e._v("I want updates only")]),e._v(" "),n("option",[e._v("Others")])])]),e._v(" "),n("div",[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"uppercase form-input",attrs:{id:"name",type:"text",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"lowercase form-input",attrs:{id:"mobile",type:"number",required:"required"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},["mobile"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n              "+e._s(t)+"\n            ")]):e._e()])})),0)}))],2),e._v(" "),n("div",[e._m(3),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{id:"email",type:"email",required:"required"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Message")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-input",domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(4),e._v(" "),n("div",{staticClass:"space-y-2"},[n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"Would like to make an appointment."},domProps:{checked:e._q(e.isAppointment,"Would like to make an appointment.")},on:{change:function(t){e.isAppointment="Would like to make an appointment."}}}),e._v("\n            I have some questions and I would like to make an appointment to\n            discuss in details.\n          ")]),e._v(" "),n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"No appointment required."},domProps:{checked:e._q(e.isAppointment,"No appointment required.")},on:{change:function(t){e.isAppointment="No appointment required."}}}),e._v("\n            No appointment required for now.\n          ")]),e._v(" "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},["isAppointment"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n                "+e._s(t)+"\n              ")]):e._e()])})),0)}))],2)]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(5),e._v(" "),n("label",{staticClass:"inline-flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.policyIsAgree,expression:"policyIsAgree"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{type:"checkbox",value:"1",required:"required"},domProps:{checked:Array.isArray(e.policyIsAgree)?e._i(e.policyIsAgree,"1")>-1:e.policyIsAgree},on:{change:function(t){var n=e.policyIsAgree,o=t.target,r=!!o.checked;if(Array.isArray(n)){var c=e._i(n,"1");o.checked?c<0&&(e.policyIsAgree=n.concat(["1"])):c>-1&&(e.policyIsAgree=n.slice(0,c).concat(n.slice(c+1)))}else e.policyIsAgree=r}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("I have read and agree to the\n            "),n("NuxtLink",{staticClass:"font-medium underline text-theme-600",attrs:{to:"/privacy-policy"}},[e._v("Privacy Policy")])],1)])])]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        text-white\n        uppercase\n        transition\n        bg-gray-800\n        border border-transparent\n        rounded-md\n        hover:bg-gray-700\n        active:bg-gray-900\n        focus:outline-none focus:border-gray-900 focus:shadow-outline-gray\n        disabled:opacity-25\n      "},[e._v("\n      Submit\n    ")]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        uppercase\n        transition\n        border border-transparent border-gray-800\n        rounded-md\n        hover:border-theme-700 hover:text-theme-700\n        focus:outline-none focus:shadow-outline-gray\n        disabled:opacity-25\n      ",on:{click:function(t){return t.preventDefault(),e.reset.apply(null,arguments)}}},[e._v("\n      Reset\n    ")])]),e._v(" "),n("div",[e.errors.length?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-red-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"}})]),e._v(" "),n("div",{staticClass:"select-none"},[e._v("\n        The given data was invalid.\n        "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},[n("p",[e._v(e._s(t))])])})),0)}))],2)]):e.success?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-green-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-green-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"}}),e._v(" "),n("path",{attrs:{d:"M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"}})]),e._v(" "),e._m(6)]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"enquiry"}},[e._v("Enquiry"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"name"}},[e._v("Name"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"mobile"}},[e._v("Mobile"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"email"}},[e._v("Email"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"make_appt"}},[e._v("Make an Appointment?"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Acceptance of Privacy Policy"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-none"},[e._v("\n        Thank you for your enquiry, we will respond to your request soon.\n        "),n("div")])}],!1,null,null,null);t.default=component.exports},function(e,t,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(40).default)("3284173e",content,!0,{sourceMap:!1})},function(e,t,n){e.exports=n.p+"img/book-an-appointment.02f0f96.jpg"},function(e,t,n){"use strict";n(235)},function(e,t,n){var o=n(39)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"p-4 prose bg-gray-200 sm:order-2 md:w-1/2"},[o("img",{staticClass:"w-full",attrs:{src:n(236),alt:"Book An Appointment"}}),e._v(" "),o("p",[e._v("\n            Book An Appointment to view ShowFlat & get VVIP Discounts\n            (Limited Time), Direct Developer Price, & Hardcopy E-Brochure.\n            Guaranteed with Best Price Possible.\n          ")]),e._v(" "),o("p",[e._v("OR")]),e._v(" "),o("p",[e._v("\n            Fill up the form on the left and get a copy of Price, E-Brochure,\n            and Latest Updates!\n          ")]),e._v(" "),o("p",[e._v("Strictly no spam policy.")])])}],r={components:{FormBookAppoinment:n(234).default}},c=(n(237),n(13)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pb-12"},[n("div",{staticClass:"bg-theme-300 pb-96"}),e._v(" "),n("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-80"},[n("div",{staticClass:"overflow-hidden bg-white rounded-md shadow-lg"},[n("div",{staticClass:"flex flex-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"p-4 md:order-1 md:w-1/2"},[n("section",{staticClass:"space-y-6"},[n("form-book-appoinment")],1)])])])])])}),o,!1,null,"2a89c52a",null);t.default=component.exports;installComponents(component,{FormBookAppoinment:n(234).default})},function(e,t,n){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)}function o(e,t){var o=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||n,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(t.value),r=o.handler,c=o.middleware,a=o.detectIframe;if(o.isActive){if(e["__v-click-outside"]=o.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(e){var t=e.el,n=e.event,o=e.handler,r=e.middleware,c=n.path||n.composedPath&&n.composedPath();(c?c.indexOf(t)<0:!t.contains(n.target))&&i({event:n,handler:o,middleware:r})}({el:e,event:t,handler:r,middleware:c})}}})),a){var l={event:"blur",srcTarget:window,handler:function(t){return function(e){var t=e.el,n=e.event,o=e.handler,r=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:n,handler:o,middleware:r})}),0)}({el:e,event:t,handler:r,middleware:c})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[l])}e["__v-click-outside"].forEach((function(t){var n=t.event,i=t.srcTarget,o=t.handler;return setTimeout((function(){e["__v-click-outside"]&&i.addEventListener(n,o,!1)}),0)}))}}function r(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var c=e?{bind:o,update:function(e,t){var n=t.value,i=t.oldValue;JSON.stringify(n)!==JSON.stringify(i)&&(r(e),o(e,{value:n}))},unbind:r}:{};return{install:function(e){e.directive("click-outside",c)},directive:c}}()},function(e,t,n){e.exports=n.p+"img/Gazania_50m_Lap_Pool-1024x576.5713926.jpg"},function(e,t,n){e.exports=n.p+"img/Gazania_50m_Lap_Pool_Water_Wall-1024x576.eeefc78.jpg"},function(e,t,n){e.exports=n.p+"img/Gazania_Grand_Arrival_Plaza-1-1024x576.c3436a5.jpg"},function(e,t,n){e.exports=n.p+"img/Gazania_Hero_Shot-1-1024x576.32fe018.jpg"},function(e,t,n){e.exports=n.p+"img/Gazania_Water_Wall-1024x576.60f7ca1.jpg"},function(e,t,n){e.exports=n.p+"img/Gazania__Clubhouse-1024x576.e113695.jpg"},function(e,t,n){e.exports=n.p+"img/Gazania_outdoor_Fitness_area_Kids_Playground_and_pavilion-1024x576.9a7f3b1.jpg"},function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-1-1024x504.cd9f5df.jpg"},function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-2-1024x456.1f4db8c.jpg"},function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-3-1024x366.a9e1d00.jpg"},function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-4-1024x456.8205cb8.jpg"},function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-5-1024x456.66bbcfe.jpg"},function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-6-1024x456.02d8077.jpg"},function(e,t,n){e.exports=n.p+"img/the-gazania-condo-playground-singapore-1024x576.a5a5b17.jpeg"},function(e,t,n){e.exports=n.p+"img/the-gazania-singapore-spa-pool-1024x576.e59d41b.jpg"},function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-3.11ccf73.jpg"},function(e,t,n){e.exports=n.p+"img/home-best-price.64ac258.jpg"},function(e,t,n){e.exports=n.p+"img/home-book-appointment-1.8a3a8ce.jpg"},function(e,t,n){e.exports=n.p+"img/home-floor-plan.571b776.jpg"},function(e,t,n){e.exports=n.p+"img/tablet.461cce4.png"},function(e,t,n){e.exports=n.p+"img/bidadari.913680a.jpg"},function(e,t,n){e.exports=n.p+"img/bidadari-1.654273b.jpg"},function(e,t,n){e.exports=n.p+"img/bidadari-2.1da167c.jpg"},function(e,t,n){e.exports=n.p+"img/bidadari-estate-plan-1024x537.ade28b1.jpg"},function(e,t,n){e.exports=n.p+"img/bidadari-heritage-walk-1024x457.b2dc20f.jpg"},function(e,t,n){e.exports=n.p+"img/Bidadari-bus-interchange.ab26ed1.jpg"},function(e,t,n){e.exports=n.p+"img/crl-singapore-map-1024x606.13832bf.jpg"},function(e,t,n){e.exports=n.p+"img/why-build-the-crl-singapore-724x1024.2313349.jpg"},function(e,t,n){e.exports=n.p+"img/the-gazania-lilium-logo-300x300.68f2093.png"},function(e,t,n){e.exports=n.p+"img/Awards.34f766a.png"},function(e,t,n){e.exports=n.p+"img/track-record-1.5f31968.jpg"},function(e,t,n){e.exports=n.p+"img/track-record-2.dbac72f.jpg"},function(e,t,n){e.exports=n.p+"img/track-record-3.25be748.jpg"},function(e,t,n){e.exports=n.p+"img/track-record-4.c9b4c9c.png"},function(e,t,n){e.exports=n.p+"img/track-record-5.d8be07b.jpg"},function(e,t,n){e.exports=n.p+"img/track-record-6.dd14f2e.png"},function(e,t,n){e.exports=n.p+"img/front-cover-the-lilium.2298175.png"},function(e,t,n){e.exports=n.p+"img/The-Lilium-Site-Plan-Singapore.0f16424.jpg"},function(e,t,n){e.exports=n.p+"img/gazania-site-plan.2a8ad22.jpg"},function(e,t,n){e.exports=n.p+"img/home-artist-impression-thumb-1.7681ea8.jpg"},function(e,t,n){e.exports=n.p+"img/home-artist-impression-thumb-2.6be98fd.jpg"},function(e,t,n){e.exports=n.p+"img/home-artist-impression-thumb-3.36aae7f.jpg"},function(e,t,n){e.exports=n.p+"img/home-artist-impression-thumb-4.39d2e65.jpg"},function(e,t,n){e.exports=n.p+"img/map-location-thelilium.8d02a64.png"},function(e,t,n){e.exports=n.p+"img/showflat-thelilium.394b0e3.png"},function(e,t,n){e.exports=n.p+"img/singhaiyi-logo.a6c7b46.jpg"},function(e,t,n){e.exports=n.p+"img/location-map-gazania.1f8a440.jpg"},function(e,t,n){e.exports=n.p+"img/location-map-lilium.5d9003b.png"},function(e,t,n){e.exports=n.p+"img/press-1.1.2941acd.png"},function(e,t,n){e.exports=n.p+"img/press-1.2.e3b7b08.png"},function(e,t,n){e.exports=n.p+"img/press-2.0.a47486f.jpg"},function(e,t,n){e.exports=n.p+"img/press-2.08b5cda.jpg"},function(e,t,n){e.exports=n.p+"img/press-3.1.3cd216d.png"},function(e,t,n){e.exports=n.p+"img/press-3.66236a9.jpg"},function(e,t,n){e.exports=n.p+"img/press-4.01.442bbe0.jpg"},function(e,t,n){e.exports=n.p+"img/press-4.02.414eb30.png"},function(e,t,n){e.exports=n.p+"img/press-5.1.65924f2.png"},function(e,t,n){e.exports=n.p+"img/press-5.2.6653a2d.jpg"},function(e,t,n){e.exports=n.p+"img/press-five.d444cfb.png"},function(e,t,n){e.exports=n.p+"img/press-four.383428f.jpg"},function(e,t,n){e.exports=n.p+"img/press1-1.66a0aeb.jpg"},function(e,t,n){e.exports=n.p+"img/the-gazania-ebrochure.1be569e.png"},function(e,t,n){e.exports=n.p+"img/payar-lebar1.5b8e174.png"},function(e,t,n){e.exports=n.p+"img/the-serangoon-master-plan1.723ad26.png"},function(e,t,n){e.exports=n.p+"img/the-serangoon-master-plan2.2959e44.png"},function(e,t,n){e.exports=n.p+"img/the-serangoon-master-plan3.f689c3d.png"},function(e,t,n){var map={"./2-bed-b1.png":308,"./2-bed-study-b2.png":309,"./2-bed-study-b3.png":310,"./3bed-c1.png":311,"./3bed-c2.png":312,"./4-bed-type-d1.png":313,"./4-bed-type-d2.png":314,"./Awards.png":270,"./SmartSelect_20190413-171457_Adobe-Acrobat.jpg":315,"./SmartSelect_20190413-171525_Adobe-Acrobat.jpg":316,"./SmartSelect_20190413-171544_Adobe-Acrobat.jpg":317,"./SmartSelect_20190413-171620_Adobe-Acrobat.jpg":318,"./SmartSelect_20190413-171636_Adobe-Acrobat.jpg":319,"./SmartSelect_20190413-171806_Adobe-Acrobat.jpg":320,"./SmartSelect_20190413-171842_Adobe-Acrobat.jpg":321,"./SmartSelect_20190413-171900_Adobe-Acrobat.jpg":322,"./SmartSelect_20190413-171955_Adobe-Acrobat.jpg":323,"./SmartSelect_20190413-172015_Adobe-Acrobat.jpg":324,"./SmartSelect_20190413-172059_Adobe-Acrobat.jpg":325,"./SmartSelect_20190413-172239_Adobe-Acrobat.jpg":326,"./SmartSelect_20190413-172248_Adobe-Acrobat.jpg":327,"./SmartSelect_20190413-172359_Adobe-Acrobat.jpg":328,"./SmartSelect_20190413-172433_Adobe-Acrobat.jpg":329,"./SmartSelect_20190413-172449_Adobe-Acrobat.jpg":330,"./SmartSelect_20190413-172542_Adobe-Acrobat.jpg":331,"./SmartSelect_20190413-172625_Adobe-Acrobat.jpg":332,"./SmartSelect_20190413-172719_Adobe-Acrobat.jpg":333,"./SmartSelect_20190413-172751_Adobe-Acrobat.jpg":334,"./SmartSelect_20190413-172806_Adobe-Acrobat.jpg":335,"./SmartSelect_20190413-172856_Adobe-Acrobat.jpg":336,"./The-Lilium-Site-Plan-Singapore.jpg":278,"./book-an-appointment.jpg":236,"./developer/track-record-1.jpg":271,"./developer/track-record-2.jpg":272,"./developer/track-record-3.jpg":273,"./developer/track-record-4.jpg":337,"./developer/track-record-4.png":274,"./developer/track-record-5.jpg":275,"./developer/track-record-6.png":276,"./front-cover-the-lilium.png":277,"./gallery/Gazania_50m_Lap_Pool-1024x576.jpg":241,"./gallery/Gazania_50m_Lap_Pool_Water_Wall-1024x576.jpg":242,"./gallery/Gazania_Grand_Arrival_Plaza-1-1024x576.jpg":243,"./gallery/Gazania_Hero_Shot-1-1024x576.jpg":244,"./gallery/Gazania_Water_Wall-1024x576.jpg":245,"./gallery/Gazania__Clubhouse-1024x576.jpg":246,"./gallery/Gazania_outdoor_Fitness_area_Kids_Playground_and_pavilion-1024x576.jpg":247,"./gallery/The-Lilium-Perspective-1-1024x504.jpg":248,"./gallery/The-Lilium-Perspective-2-1024x456.jpg":249,"./gallery/The-Lilium-Perspective-3-1024x366.jpg":250,"./gallery/The-Lilium-Perspective-4-1024x456.jpg":251,"./gallery/The-Lilium-Perspective-5-1024x456.jpg":252,"./gallery/The-Lilium-Perspective-6-1024x456.jpg":253,"./gallery/the-gazania-condo-playground-singapore-1024x576.jpeg":254,"./gallery/the-gazania-singapore-spa-pool-1024x576.jpg":255,"./gazania-site-plan.jpg":279,"./home/The-Lilium-Perspective-3.jpg":256,"./home/banner-main1.jpg":338,"./home/home-artist-impression-thumb-1.jpg":280,"./home/home-artist-impression-thumb-2.jpg":281,"./home/home-artist-impression-thumb-3.jpg":282,"./home/home-artist-impression-thumb-4.jpg":283,"./home/home-best-price.jpg":257,"./home/home-book-appointment-1.jpg":258,"./home/home-book-appointment.jpg":339,"./home/home-floor-plan.jpg":259,"./home/map-location-thelilium.png":284,"./home/showflat-thelilium.png":285,"./home/singhaiyi-logo.jpg":286,"./home/tablet.png":260,"./location-map-gazania.jpg":287,"./location-map-lilium.png":288,"./press/press-1.1.png":289,"./press/press-1.2.png":290,"./press/press-2.0.jpg":291,"./press/press-2.jpg":292,"./press/press-3.1.png":293,"./press/press-3.jpg":294,"./press/press-4.01.jpg":295,"./press/press-4.02.png":296,"./press/press-5.1.png":297,"./press/press-5.2.jpg":298,"./press/press-five.png":299,"./press/press-four.jpg":300,"./press/press1-1.jpg":301,"./singhaiyi.png":170,"./the-gazania-ebrochure.png":302,"./the-gazania-lilium-logo-300x300.png":269,"./type-d1.png":340,"./type-d2.png":341,"./type-ph1-lower.png":342,"./type-ph1-upper.png":343,"./type-ph2-lower.png":344,"./type-ph2-upper.png":345,"./type-ph3-lower.png":346,"./type-ph3-upper.png":347,"./ura/Bidadari-bus-interchange.jpg":266,"./ura/bidadari-1.jpg":262,"./ura/bidadari-2.jpg":263,"./ura/bidadari-estate-plan-1024x537.jpg":264,"./ura/bidadari-heritage-walk-1024x457.jpg":265,"./ura/bidadari.jpg":261,"./ura/central-area-ura-masterplan-1.png":348,"./ura/crl-singapore-map-1024x606.jpg":267,"./ura/payar-lebar1.png":303,"./ura/the-serangoon-master-plan1.png":304,"./ura/the-serangoon-master-plan2.png":305,"./ura/the-serangoon-master-plan3.png":306,"./ura/why-build-the-crl-singapore-724x1024.jpg":268};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=307},function(e,t,n){e.exports=n.p+"img/2-bed-b1.1cb21c7.png"},function(e,t,n){e.exports=n.p+"img/2-bed-study-b2.adc916c.png"},function(e,t,n){e.exports=n.p+"img/2-bed-study-b3.70298a8.png"},function(e,t,n){e.exports=n.p+"img/3bed-c1.fb70927.png"},function(e,t,n){e.exports=n.p+"img/3bed-c2.950f7dd.png"},function(e,t,n){e.exports=n.p+"img/4-bed-type-d1.22635de.png"},function(e,t,n){e.exports=n.p+"img/4-bed-type-d2.cfba734.png"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-171457_Adobe-Acrobat.e931f1a.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-171525_Adobe-Acrobat.d79b445.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-171544_Adobe-Acrobat.a6ddaa5.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-171620_Adobe-Acrobat.a98379c.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-171636_Adobe-Acrobat.8b81471.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-171806_Adobe-Acrobat.9a3efca.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-171842_Adobe-Acrobat.8859d30.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-171900_Adobe-Acrobat.aa4cb5f.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-171955_Adobe-Acrobat.2d32bc0.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172015_Adobe-Acrobat.aa190d3.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172059_Adobe-Acrobat.0b00f92.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172239_Adobe-Acrobat.77bfac6.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172248_Adobe-Acrobat.fa161e3.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172359_Adobe-Acrobat.002e504.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172433_Adobe-Acrobat.aa7bd25.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172449_Adobe-Acrobat.0c32b09.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172542_Adobe-Acrobat.c42f26c.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172625_Adobe-Acrobat.ca8aad2.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172719_Adobe-Acrobat.24681a6.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172751_Adobe-Acrobat.c826264.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172806_Adobe-Acrobat.5dd3bff.jpg"},function(e,t,n){e.exports=n.p+"img/SmartSelect_20190413-172856_Adobe-Acrobat.71cdada.jpg"},function(e,t,n){e.exports=n.p+"img/track-record-4.24b6d45.jpg"},function(e,t,n){e.exports=n.p+"img/banner-main1.d94fdfb.jpg"},function(e,t,n){e.exports=n.p+"img/home-book-appointment.8d72b71.jpg"},function(e,t,n){e.exports=n.p+"img/type-d1.b59e061.png"},function(e,t,n){e.exports=n.p+"img/type-d2.16f813e.png"},function(e,t,n){e.exports=n.p+"img/type-ph1-lower.7a80c8d.png"},function(e,t,n){e.exports=n.p+"img/type-ph1-upper.1feed9b.png"},function(e,t,n){e.exports=n.p+"img/type-ph2-lower.53abbcd.png"},function(e,t,n){e.exports=n.p+"img/type-ph2-upper.67655ac.png"},function(e,t,n){e.exports=n.p+"img/type-ph3-lower.64b3a59.png"},function(e,t,n){e.exports=n.p+"img/type-ph3-upper.a91ce6c.png"},function(e,t,n){e.exports=n.p+"img/central-area-ura-masterplan-1.045d7e1.png"},,,function(e,t,n){"use strict";n.r(t);var o=n(240),r={name:"LargeModal",directives:{clickOutside:n.n(o).a.directive},props:{image:{type:String,default:""},bedRoomProp:{type:Array,default:function(){return[]}}},data:function(){return{showModal:!1,bedRooms:this.bedRoomProp,imageUrl:""}},computed:{},methods:{toggleModal:function(e){this.imageUrl=e,this.showModal=!this.showModal,this.Modal=!this.$emit("isModal",this.Modal)},externalClick:function(){this.showModal=!1},imageSource:function(e){return n(307)("./".concat(e))}}},c=n(13),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid grid-cols-2 gap-2 sm:gap-6 sm:grid-cols-3"},[e._l(e.bedRooms,(function(t,o){return n("div",{key:o,staticClass:"space-y-1 cursor-pointer",on:{click:function(n){return e.toggleModal(t.url)}}},[n("img",{staticClass:"mx-auto rounded  w-2/3",attrs:{src:e.imageSource(t.url),alt:""}}),e._v(" "),n("p",{staticClass:"text-center"},[e._v(e._s(t.title))])])})),e._v(" "),e.showModal?n("div",{staticClass:"\n      fixed\n      inset-0\n      z-50\n      outline-none\n      focus:outline-none\n      justify-center\n      items-center\n      flex\n      overscroll-y-contain\n      overflow-auto\n    "},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.externalClick,expression:"externalClick"}],staticClass:"relative w-auto my-auto mx-auto max-w-6xl"},[n("div",{staticClass:"\n          border-0\n          rounded-lg\n          shadow-lg\n          relative\n          flex flex-col\n          w-full\n          bg-white\n          outline-none\n          focus:outline-none\n        "},[n("div",{staticClass:"relative p-6 flex-auto"},[n("img",{staticClass:"mx-auto rounded",attrs:{src:e.imageSource(e.imageUrl),alt:""}})])])])]):e._e(),e._v(" "),e.showModal?n("div",{staticClass:"opacity-25 fixed inset-0 z-40 bg-black"}):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o={data:function(){return{TwoBedroom:[{title:"Type B1",url:"2-bed-b1.png"}],TwoBedroomStudy:[{title:"Type B2",url:"2-bed-study-b2.png"},{title:"Type B3",url:"2-bed-study-b3.png"}],ThreeBedroom:[{title:"Type C1",url:"3bed-c1.png"}],ThreeBedroomPremium:[{title:"Type C2",url:"3bed-c2.png"}],FourBedroom:[{title:"Type D1",url:"type-d1.png"},{title:"Type D2",url:"type-d2.png"}],FourBedroomStudy:[{title:"Type PH1 - Lower ",url:"type-ph1-lower.png"},{title:"Type PH1 - Upper ",url:"type-ph1-upper.png"},{title:"Type PH2 - Lower ",url:"type-ph2-lower.png"},{title:"Type PH2 - Upper ",url:"type-ph2-upper.png"},{title:"Type PH3 - Lower ",url:"type-ph3-lower.png"},{title:"Type PH3 - Upper ",url:"type-ph3-upper.png"}]}}},r=n(13),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("section",[n("div",{staticClass:"max-w-6xl px-4 py-12 mx-auto space-y-12"},[n("div",{staticClass:"space-y-4"},[n("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          2 Bedroom\n        ")]),e._v(" "),n("BedroomImageModal",{attrs:{"bed-room-prop":e.TwoBedroom}})],1),e._v(" "),n("div",{staticClass:"space-y-4"},[n("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          2 Bedroom + Study\n        ")]),e._v(" "),n("BedroomImageModal",{attrs:{"bed-room-prop":e.TwoBedroomStudy}})],1),e._v(" "),n("div",{staticClass:"space-y-4"},[n("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          3 Bedroom\n        ")]),e._v(" "),n("BedroomImageModal",{attrs:{"bed-room-prop":e.ThreeBedroom}})],1),e._v(" "),n("div",{staticClass:"space-y-4"},[n("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          3 Bedroom Premium\n        ")]),e._v(" "),n("BedroomImageModal",{attrs:{"bed-room-prop":e.ThreeBedroomPremium}})],1),e._v(" "),n("div",{staticClass:"space-y-4"},[n("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          4 Bedroom\n        ")]),e._v(" "),n("BedroomImageModal",{attrs:{"bed-room-prop":e.FourBedroom}})],1),e._v(" "),n("div",{staticClass:"space-y-4"},[n("h3",{staticClass:"text-xl font-semibold sm:text-2xl text-center"},[e._v("\n          4 Bedroom + Study\n        ")]),e._v(" "),n("BedroomImageModal",{attrs:{"bed-room-prop":e.FourBedroomStudy}})],1),e._v(" "),n("section",{staticClass:"py-6"},[n("NuxtLink",{staticClass:"\n            inline-flex\n            items-center\n            justify-center\n            w-full\n            px-3\n            py-3\n            text-white\n            transition\n            rounded\n            sm:px-0\n            hover:bg-theme-900\n            bg-theme-700\n          ",attrs:{to:"/pricing"}},[e._v("\n          Continue To Pricing\n          "),n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13 6l6 6-6 6M5 6l6 6-6 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)])]),e._v(" "),n("BookAppointment")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-12 select-none bg-theme-700"},[n("div",{staticClass:"text-xl font-semibold text-center text-white sm:text-4xl"},[e._v("\n      Floor Plan\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{BedroomImageModal:n(351).default,BookAppointment:n(239).default})}])]);