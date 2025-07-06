let o=[];const t=document.createElement("div");t.style.position="fixed";t.style.left="50%";t.style.top="0";t.style.height="100%";t.style.width="100%";t.style.transform="translateX(-50%)";t.style.zIndex="9999";t.style.pointerEvents="none";document.body.appendChild(t);class m{static show(s,i=2e3){const e=document.createElement("div"),a=e.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=`
            :host {
                position: fixed;
                left: 50%;
                top: 0;
                transform: translate(-50%, 0);
                z-index: 9999;
                will-change: transform, opacity;
                transition: transform 0.3s ease, opacity 0.3s ease;
            }
            .snackbar {
                border: 1.5px solid var(--color-box-border);
                background: var(--color-box);
                color: var(--color-text);
                padding: 12px 24px;
                border-radius: 4px;
                opacity: 0;
                display: inline-block;
                transform: translateY(-20px);
                animation: fadeInDown 300ms ease forwards;
            }
            @keyframes fadeInDown {
                0% {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;const r=document.createElement("div");r.classList.add("snackbar"),r.textContent=s,a.appendChild(n),a.appendChild(r),t.appendChild(e),r.offsetHeight+5;const p=o.length,f=10+o.reduce((l,y,d)=>l+(d<p?o[d].shadowRoot.querySelector(".snackbar").offsetHeight+5:0),0);e.style.transform=`translate(-50%, ${f}px)`,o.push(e),setTimeout(()=>{e.style.transform="translate(-50%, -20px)",e.style.opacity=0,o=o.filter(l=>l!==e),this.repositionToasts(),setTimeout(()=>{t.removeChild(e)},300)},i)}static repositionToasts(){o.forEach((s,i)=>{const e=10+o.slice(0,i).reduce((a,n)=>a+n.shadowRoot.querySelector(".snackbar").offsetHeight+5,0);s.style.transform=`translate(-50%, ${e}px)`})}}function h(c,s=2e3){m.show(c,s)}export{h as T};
