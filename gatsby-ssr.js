import React from "react"
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
            let Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            const s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6186c1ef6885f60a50baa12e/1fjr6b57k';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `,
      }}
    />,
  ])
}
