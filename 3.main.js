(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{266:function(e,a,n){"use strict";n.r(a),n.d(a,"title",(function(){return g}));var t=n(3),s=n.n(t),o=n(0),r=n.n(o),m=n(2),l=n(270),p=n(28),c=n.p+"08fa6f19e74822f9106c789a86653cba.jpg",i=n.p+"001-example.html",g="CSS variable as a responsive selector";a.default=function(e){var a=e.components;s()(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:a},r.a.createElement(l.a,null,r.a.createElement("title",null,g)),r.a.createElement(p.b,{src:c},r.a.createElement("span",null,"Photo by ",r.a.createElement("a",{href:"https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Pankaj Patel")," on ",r.a.createElement("a",{href:"https://unsplash.com/s/photos/css?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash"))),r.a.createElement(m.MDXTag,{name:"h1",components:a,props:{id:"css-variable-as-a-responsive-selector"}},"CSS variable as a responsive selector"),r.a.createElement(m.MDXTag,{name:"p",components:a},"A few days ago, while doing some tests of the use of CSS variables, I found a solution to apply dynamic styles through the use of only ",r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"CSS variables"),", similar to what is possible with some CSS frameworks that provide ",r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"different values")," ​​of the same class (margin, padding, border, etc ...)."),r.a.createElement(m.MDXTag,{name:"p",components:a},"With this trick, it is possible to ",r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"reduce the redundancy")," of the selectors and cancel their limits since the possible values ​​are not only those foreseen by the but ",r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"virtually infinite"),"."),r.a.createElement(m.MDXTag,{name:"p",components:a},"The solution also provides that the style is ",r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"applied only to elements that explicitly have the CSS variable")," in the style attribute.",r.a.createElement(m.MDXTag,{name:"br",components:a,parentName:"p"}),"To be precise, look for the elements that have indicated a CSS variable that ends with the one in question (note the less hyphen at the beginning into the example below).",r.a.createElement(m.MDXTag,{name:"br",components:a,parentName:"p"}),"This will allow us to add prefixes, which we will see later."),r.a.createElement(m.MDXTag,{name:"pre",components:a},r.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-css",metastring:""}},'[style*="-margin:"] { /*...*/ }\n')),r.a.createElement(m.MDXTag,{name:"p",components:a},'The variable we will use will not be the same as the selector, but one that ends differently (ex. "-val" suffix).'),r.a.createElement(m.MDXTag,{name:"pre",components:a},r.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-css",metastring:""}},'[style*="-margin:"] {\n  margin: var(--margin-val);\n}\n')),r.a.createElement(m.MDXTag,{name:"p",components:a},"A second selector will search for the exact CSS variable and copy its value into the variable used by the applied properties."),r.a.createElement(m.MDXTag,{name:"pre",components:a},r.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-css",metastring:""}},'[style*="--margin:"] {\n  --margin-val: var(--margin);\n}\n')),r.a.createElement(m.MDXTag,{name:"p",components:a},"This is to allow you to ",r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"create variations")," of the value that depend on the prefix we said earlier.\nAn example is a possibility of having different prefixes for different ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"@media"),", allowing us to make the ",r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"CSS variable responsive"),"."),r.a.createElement(m.MDXTag,{name:"pre",components:a},r.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-css",metastring:""}},'@media screen and (max-width: 640px) {\n  [style*="--phone-margin:"] {\n    --margin-val: var(--phone-margin);\n  }\n}\n')),r.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"pros"}},"Pros"),r.a.createElement(m.MDXTag,{name:"p",components:a},"This technique allows you with a few lines to have the same functionality as multiple specific classes for each value.\nIn the example code a margin value is applied, but thanks to the CSS variables and the ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"calc()")," function we can define complex and responsive styles, such as the offset and blur values ​​of a shadow."),r.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"cons"}},"Cons"),r.a.createElement(m.MDXTag,{name:"p",components:a},"The selector for substring value of an attribute has ",r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"lower performance")," than that of a CSS class, and the use of CSS variables and the ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"calc()")," function can also be a performance overhead."),r.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"final-code"}},"Final code"),r.a.createElement(m.MDXTag,{name:"p",components:a},"Example CSS source:"),r.a.createElement(m.MDXTag,{name:"pre",components:a},r.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-css",metastring:""}},'[style*="-margin:"] {\n  margin: var(--margin-val);\n}\n[style*="--margin:"] {\n  --margin-val: var(--margin);\n}\n@media screen and (max-width: 640px) {\n  [style*="--phone-margin:"] {\n    --margin-val: var(--phone-margin);\n  }\n}\n@media screen and (max-width: 1024px) {\n  [style*="--tablet-margin:"] {\n    --margin-val: var(--tablet-margin);\n  }\n}\n')),r.a.createElement(m.MDXTag,{name:"p",components:a},"Example HTML source:"),r.a.createElement(m.MDXTag,{name:"pre",components:a},r.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-html",metastring:""}},'<div style="\n  --margin: 100px;\n  --tablet-margin: 50px;\n  --phone-margin: 25px;\n  border: 1px solid #000000;\n  ">Hello! Resize the viewport to switch between styles</div>\n')),r.a.createElement(m.MDXTag,{name:"p",components:a},r.a.createElement("a",{href:i},"Live Example")))}}}]);