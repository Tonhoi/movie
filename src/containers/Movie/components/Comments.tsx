import { Fragment, memo, useEffect } from "react";

const Comments = () => {
  useEffect(() => {
    // Chèn đoạn mã Disqus khi component được mount
    const script = document.createElement("script");
    script.src = "https://flashmov.disqus.com/embed.js";
    script.setAttribute("data-timestamp", +new Date() as any);
    document.body.appendChild(script);

    // Xóa đoạn mã Disqus khi component bị unmount
    return () => {
      const disqusThread = document.getElementById("disqus_thread");
      if (disqusThread) {
        while (disqusThread.firstChild) {
          disqusThread.removeChild(disqusThread.firstChild);
        }
      }
    };
  }, []);
  return (
    <Fragment>
      <div id="disqus_thread" className="lg:w-[65%] mt-16 text-white" />
    </Fragment>
  );
};
export default memo(Comments);
