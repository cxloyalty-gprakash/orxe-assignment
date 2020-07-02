import {css} from 'lit-element';
export default css`html,body{font-family:"Proxima Nova",sans-serif;font-size:14px;line-height:1.5rem}a{background-color:transparent;color:#0A57A1}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:600;line-height:1.5rem}h1{margin-top:20px;font-size:1.5rem}h2{margin-top:18px;font-size:1.25rem}h3{font-size:1.125rem}h4{font-size:1rem}h5{font-size:.875rem}h6{font-size:.75rem}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}:host{--rating-bar-font-family: Proxima Nova,sans-serif;--rating-bar-font-weight: 600;--rating-bar-label-color: #242C38;--rating-bar-background-color: #E1E6ED;--rating-bar-donut-track-stroke-color: #E1E6ED;--rating-bar-donut-margin: 8px;--rating-bat-linear-padding: 8px;--rating-bar-excellent: #238738;--rating-bar-great: #67AB04;--rating-bar-average: #D99B22;--rating-bar-poor: #D97322;--rating-bar-bad: #D9222A}label{font-family:var(--rating-bar-font-family);color:var(--rating-bar-label-color);font-weight:var(--rating-bar-font-weight)}.right{float:right}.linear-rating-bar .bar-container{background-color:var(--rating-bar-background-color);border-radius:25px;text-align:center;color:white;height:8px;margin-bottom:var(--rating-bat-linear-padding)}.linear-rating-bar label{font-size:1.6rem}.linear-rating-bar .rating{height:8px;border-radius:25px}.linear-rating-bar .rating.rating-1{background-color:var(--rating-bar-bad)}.linear-rating-bar .rating.rating-2{background-color:var(--rating-bar-poor)}.linear-rating-bar .rating.rating-3{background-color:var(--rating-bar-average)}.linear-rating-bar .rating.rating-4{background-color:var(--rating-bar-great)}.linear-rating-bar .rating.rating-5{background-color:var(--rating-bar-excellent)}.donut-rating-bar{height:40px;position:relative;width:40px}.donut-rating-bar__svg{border-radius:50%;height:100%;transform:scaleX(-1) rotate(-90deg);width:100%}.donut-rating-bar__stroke{fill:none;stroke-width:4px}.donut-rating-bar__stroke:nth-child(2){stroke:var(--rating-bar-background-color);stroke-dasharray:314.1592%}.donut-rating-bar__stroke.rating-1{stroke:var(--rating-bar-bad)}.donut-rating-bar__stroke.rating-2{stroke:var(--rating-bar-poor)}.donut-rating-bar__stroke.rating-3{stroke:var(--rating-bar-average)}.donut-rating-bar__stroke.rating-4{stroke:var(--rating-bar-great)}.donut-rating-bar__stroke.rating-5{stroke:var(--rating-bar-excellent)}.donut-rating-bar label{font-size:1.4rem;background-color:transparent;bottom:0;left:0;margin:auto;position:absolute;right:0;text-align:center;line-height:40px}`;