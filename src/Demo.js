import React from 'react'
import TweenOne from 'rc-tween-one';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
TweenOne.plugins.push(SvgDrawPlugin);

function Demo(props) {
  return (
    <div>
        <TweenOne
        animation={{ 
            x: 80, 
            scale: 0.5, 
            rotate: 120, 
            yoyo: true, // demo 演示需要
            repeat: -1, // demo 演示需要
            duration: 1000
        }}
        style={{ transform: 'translateX(-80px)' }}
        className="code-box-shape"
        />

        <svg>
            <TweenOne animation={{ SVGDraw: 30 }} component="path"/>
        </svg>
    </div>
  );

}

export default Demo;
