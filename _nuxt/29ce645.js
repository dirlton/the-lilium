(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3,4],{234:function(t,e,n){"use strict";n.r(e);n(30);var r={data:function(){return{enquiry:"",name:"",mobile:"",email:"",message:"",isAppointment:"",errors:"",success:!1,policyIsAgree:"",send_brochure:""}},methods:{send:function(){var t=this;(this.errors=[],this.mobile)&&(("65"!==this.mobile.substring(0,2)||this.mobile.length<=7)&&this.errors.push({mobile:"The mobile field contains an invalid number."}));this.isAppointment||this.errors.push({isAppointment:"The make appt field is required."}),this.errors.length||Email.send({Host:"smtp.gmail.com",Username:"gdpropertysg@gmail.com",Password:"igijvzbvkstusyph",To:"gdpropertysg@gmail.com",From:this.email,Subject:"The Lilium "+this.enquiry,Body:"<b>Name: </b>"+this.name+"<br><b> Message: </b>"+this.message+"<br><b>Mobile: </b>"+this.mobile+"<br><b>Appointment: </b>"+this.isAppointment}).then((function(){t.success=!0,t.reset()}))},reset:function(){this.enquiry="",this.name="",this.mobile="",this.email="",this.message="",this.isAppointment="",this.errors="",this.policyIsAgree="",this.send_brochure=""}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space-y-6"},[n("form",{staticClass:"space-y-4",on:{submit:function(e){return e.preventDefault(),t.send.apply(null,arguments)}}},[n("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},[n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"\n            inline-flex\n            items-center\n            w-full\n            p-4\n            font-medium\n            text-gray-600\n            border\n            rounded-lg\n            border-theme-100\n            bg-theme-50\n          ",attrs:{for:"send_brochure"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.send_brochure,expression:"send_brochure"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{id:"send_brochure",type:"checkbox"},domProps:{checked:Array.isArray(t.send_brochure)?t._i(t.send_brochure,null)>-1:t.send_brochure},on:{change:function(e){var n=t.send_brochure,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.send_brochure=n.concat([null])):l>-1&&(t.send_brochure=n.slice(0,l).concat(n.slice(l+1)))}else t.send_brochure=o}}}),t._v(" "),n("span",{staticClass:"ml-2"},[t._v("Send me E-Brochure, Floor Plan & Pricing now")])])]),t._v(" "),n("div",[t._m(0),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.enquiry,expression:"enquiry"}],staticClass:"form-input",attrs:{id:"enquiry",required:"required"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.enquiry=e.target.multiple?n:n[0]}}},[n("option",[t._v("Financing")]),t._v(" "),n("option",[t._v("Purchase")]),t._v(" "),n("option",[t._v("View Showflat")]),t._v(" "),n("option",[t._v("I want to purchase, but I have an existing property to sell")]),t._v(" "),n("option",[t._v("Decoupling")]),t._v(" "),n("option",[t._v("CPF Fund Usage")]),t._v(" "),n("option",[t._v("Loan Eligibility (LTV)")]),t._v(" "),n("option",[t._v("Total Debt Servicing Ratio (TDSR)")]),t._v(" "),n("option",[t._v("Additional Buyer Stamp Duty (ABSD)")]),t._v(" "),n("option",[t._v("I want updates only")]),t._v(" "),n("option",[t._v("Others")])])]),t._v(" "),n("div",[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"uppercase form-input",attrs:{id:"name",type:"text",required:"required"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",[t._m(2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"lowercase form-input",attrs:{id:"mobile",type:"number",required:"required"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t._v(" "),t._l(t.errors,(function(e,r){return n("div",{key:r},t._l(e,(function(e,r){return n("div",{key:r},["mobile"===r?n("p",{staticClass:"mt-2 text-sm text-red-500"},[t._v("\n              "+t._s(e)+"\n            ")]):t._e()])})),0)}))],2),t._v(" "),n("div",[t._m(3),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-input",attrs:{id:"email",type:"email",required:"required"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-input",domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sm:col-span-2"},[t._m(4),t._v(" "),n("div",{staticClass:"space-y-2"},[n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"Would like to make an appointment."},domProps:{checked:t._q(t.isAppointment,"Would like to make an appointment.")},on:{change:function(e){t.isAppointment="Would like to make an appointment."}}}),t._v("\n            I have some questions and I would like to make an appointment to\n            discuss in details.\n          ")]),t._v(" "),n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"No appointment required."},domProps:{checked:t._q(t.isAppointment,"No appointment required.")},on:{change:function(e){t.isAppointment="No appointment required."}}}),t._v("\n            No appointment required for now.\n          ")]),t._v(" "),t._l(t.errors,(function(e,r){return n("div",{key:r},t._l(e,(function(e,r){return n("div",{key:r},["isAppointment"===r?n("p",{staticClass:"mt-2 text-sm text-red-500"},[t._v("\n                "+t._s(e)+"\n              ")]):t._e()])})),0)}))],2)]),t._v(" "),n("div",{staticClass:"sm:col-span-2"},[t._m(5),t._v(" "),n("label",{staticClass:"inline-flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.policyIsAgree,expression:"policyIsAgree"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{type:"checkbox",value:"1",required:"required"},domProps:{checked:Array.isArray(t.policyIsAgree)?t._i(t.policyIsAgree,"1")>-1:t.policyIsAgree},on:{change:function(e){var n=t.policyIsAgree,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,"1");r.checked?l<0&&(t.policyIsAgree=n.concat(["1"])):l>-1&&(t.policyIsAgree=n.slice(0,l).concat(n.slice(l+1)))}else t.policyIsAgree=o}}}),t._v(" "),n("span",{staticClass:"ml-2"},[t._v("I have read and agree to the\n            "),n("NuxtLink",{staticClass:"font-medium underline text-theme-600",attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")])],1)])])]),t._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        text-white\n        uppercase\n        transition\n        bg-gray-800\n        border border-transparent\n        rounded-md\n        hover:bg-gray-700\n        active:bg-gray-900\n        focus:outline-none focus:border-gray-900 focus:shadow-outline-gray\n        disabled:opacity-25\n      "},[t._v("\n      Submit\n    ")]),t._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        uppercase\n        transition\n        border border-transparent border-gray-800\n        rounded-md\n        hover:border-theme-700 hover:text-theme-700\n        focus:outline-none focus:shadow-outline-gray\n        disabled:opacity-25\n      ",on:{click:function(e){return e.preventDefault(),t.reset.apply(null,arguments)}}},[t._v("\n      Reset\n    ")])]),t._v(" "),n("div",[t.errors.length?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-red-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"}})]),t._v(" "),n("div",{staticClass:"select-none"},[t._v("\n        The given data was invalid.\n        "),t._l(t.errors,(function(e,r){return n("div",{key:r},t._l(e,(function(e,r){return n("div",{key:r},[n("p",[t._v(t._s(e))])])})),0)}))],2)]):t.success?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-green-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-green-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"}}),t._v(" "),n("path",{attrs:{d:"M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"}})]),t._v(" "),t._m(6)]):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"enquiry"}},[t._v("Enquiry"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"name"}},[t._v("Name"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"mobile"}},[t._v("Mobile"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"email"}},[t._v("Email"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"make_appt"}},[t._v("Make an Appointment?"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[t._v("Acceptance of Privacy Policy"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-none"},[t._v("\n        Thank you for your enquiry, we will respond to your request soon.\n        "),n("div")])}],!1,null,null,null);e.default=component.exports},235:function(t,e,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("3284173e",content,!0,{sourceMap:!1})},236:function(t,e,n){t.exports=n.p+"img/book-an-appointment.02f0f96.jpg"},237:function(t,e,n){"use strict";n(235)},238:function(t,e,n){var r=n(39)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},239:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-4 prose bg-gray-200 sm:order-2 md:w-1/2"},[r("img",{staticClass:"w-full",attrs:{src:n(236),alt:"Book An Appointment"}}),t._v(" "),r("p",[t._v("\n            Book An Appointment to view ShowFlat & get VVIP Discounts\n            (Limited Time), Direct Developer Price, & Hardcopy E-Brochure.\n            Guaranteed with Best Price Possible.\n          ")]),t._v(" "),r("p",[t._v("OR")]),t._v(" "),r("p",[t._v("\n            Fill up the form on the left and get a copy of Price, E-Brochure,\n            and Latest Updates!\n          ")]),t._v(" "),r("p",[t._v("Strictly no spam policy.")])])}],o={components:{FormBookAppoinment:n(234).default}},l=(n(237),n(13)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pb-12"},[n("div",{staticClass:"bg-theme-300 pb-96"}),t._v(" "),n("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-80"},[n("div",{staticClass:"overflow-hidden bg-white rounded-md shadow-lg"},[n("div",{staticClass:"flex flex-wrap"},[t._m(0),t._v(" "),n("div",{staticClass:"p-4 md:order-1 md:w-1/2"},[n("section",{staticClass:"space-y-6"},[n("form-book-appoinment")],1)])])])])])}),r,!1,null,"2a89c52a",null);e.default=component.exports;installComponents(component,{FormBookAppoinment:n(234).default})},393:function(t,e,n){"use strict";n.r(e);var r=n(13),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",[n("div",{staticClass:"max-w-6xl px-4 py-12 mx-auto space-y-6"},[t._m(1),t._v(" "),n("section",{staticClass:"py-6"},[n("NuxtLink",{staticClass:"\n            inline-flex\n            items-center\n            justify-center\n            w-full\n            px-3\n            py-3\n            text-white\n            transition\n            rounded\n            sm:px-0\n            hover:bg-theme-900\n            bg-theme-700\n          ",attrs:{to:"/financing/maximum-loan-eligibility-calculator-tdsr"}},[t._v("\n          Continue To Maximum Loan Eligibility Calculator (TDSR)\n          "),n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13 6l6 6-6 6M5 6l6 6-6 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)])]),t._v(" "),n("BookAppointment")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-12 select-none bg-theme-700"},[n("div",{staticClass:"text-xl font-semibold text-center text-white sm:text-4xl"},[t._v("\n      Housing Loan Information\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"space-y-6"},[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},[n("div",{staticClass:"\n                inline-block\n                min-w-full\n                py-2\n                align-middle\n                sm:px-6\n                lg:px-8\n              "},[n("div",{staticClass:"\n                  overflow-hidden\n                  border-b border-gray-200\n                  shadow\n                  sm:rounded-lg\n                "},[n("table",{staticClass:"min-w-full divide-y divide-gray-200"},[n("thead",[n("tr",{staticClass:"divide-x divide-gray-200"},[n("th",{staticClass:"\n                          px-6\n                          py-3\n                          text-xs\n                          font-medium\n                          tracking-wider\n                          text-left\n                          uppercase\n                          text-theme-700\n                          bg-theme-100\n                        ",attrs:{scope:"col"}}),t._v(" "),n("th",{staticClass:"\n                          px-6\n                          py-3\n                          text-xs\n                          font-medium\n                          tracking-wider\n                          text-left\n                          uppercase\n                          text-theme-700\n                          bg-theme-100\n                        ",attrs:{colspan:"3",scope:"col"}},[t._v("\n                        First Loan\n                      ")]),t._v(" "),n("th",{staticClass:"\n                          px-6\n                          py-3\n                          text-xs\n                          font-medium\n                          tracking-wider\n                          text-left\n                          uppercase\n                          text-theme-700\n                          bg-theme-100\n                        ",attrs:{colspan:"3",scope:"col"}},[t._v("\n                        Second Loan\n                      ")]),t._v(" "),n("th",{staticClass:"\n                          px-6\n                          py-3\n                          text-xs\n                          font-medium\n                          tracking-wider\n                          text-left\n                          uppercase\n                          text-theme-700\n                          bg-theme-100\n                        ",attrs:{colspan:"3",scope:"col"}},[t._v("\n                        Third Loan\n                      ")])])]),t._v(" "),n("tbody",{staticClass:"bg-white divide-y divide-gray-200"},[n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2"},[t._v("Loan Tenure")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"2"}},[t._v("Up to 30 years")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("31-35 years")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"2"}},[t._v("Up to 30 years")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("31-35 years")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"2"}},[t._v("Up to 30 years")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("31-35 years")])]),t._v(" "),n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2",attrs:{rowspan:"2"}},[t._v("Age")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"9"}},[t._v("\n                        Age used to calculate loan tenure, will be based on\n                        income-weighted\n                      ")])]),t._v(" "),n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("Up to 65")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("Up to 70-75")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("Up to 70-75")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("Up to 65")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("Up to 70-75")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("Up to 70-75")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("Up to 65")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("Up to 70-75")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"1"}},[t._v("Up to 70-75")])]),t._v(" "),n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2",attrs:{rowspan:"2"}},[t._v("Maximum LTV Limit")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("75%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("55%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("55%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("45%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("25%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("25%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("35%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("15%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("15%")])]),t._v(" "),n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2 text-center",attrs:{colspan:"9"}},[t._v("\n                        20% (non-individuals)\n                      ")])]),t._v(" "),n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2"},[t._v("Minimum Cash Downpayment")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("5%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("10%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("10%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("25%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("25%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("25%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("25%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("25%")]),t._v(" "),n("td",{staticClass:"px-3 py-2"},[t._v("25%")])]),t._v(" "),n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2"},[t._v("Gaurantors / Co-borrowers")]),t._v(" "),n("td",{staticClass:"px-3 py-2 text-center",attrs:{colspan:"9"}},[t._v("\n                        All Co-borrowers must be mortgagors."),n("br"),t._v("\n                        Guarantors must be co-borrowers if the latter did not\n                        pass the TDSR criteria\n                      ")])]),t._v(" "),n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2"},[t._v("Mortgage Servicing Ratio")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"9"}},[t._v("N/A")])]),t._v(" "),n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2"},[t._v("Total Debt Servicing Ratio")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"9"}},[t._v("60%")])]),t._v(" "),n("tr",{staticClass:"divide-x divide-gray-200"},[n("td",{staticClass:"px-3 py-2"},[t._v("Stress Test Interest Rate")]),t._v(" "),n("td",{staticClass:"px-3 py-2",attrs:{colspan:"9"}},[t._v("3.5%")])])])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BookAppointment:n(239).default})}}]);