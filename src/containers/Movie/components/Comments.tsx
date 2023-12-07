import { Fragment, memo } from "react";
import Script from "next/script";

const Comments = () => {
  return (
    <Fragment>
      {/* <div id="disqus_thread" className="lg:w-[65%] mt-16 text-white" />
      <Script id="my-script">
        {`
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://flashmov.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();`}
      </Script> */}
      
    </Fragment>
  );
};
export default memo(Comments);
