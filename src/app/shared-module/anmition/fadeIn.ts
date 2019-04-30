import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    state('in', style({ display: 'none' })), // 默认元素不展开
    transition('void => *', [ // 进场动画
        animate(2000, keyframes([
            style({ height: '0', opacity: 0, offset: 0 }), // 元素高度0，元素隐藏(透明度为0)，动画帧在0%
            style({ height: '*', opacity: .5, offset: .5 }),
            style({ height: '*', opacity: 1, offset: 1 }) // 200ms后高度自适应展开，元素展开(透明度为1)，动画帧在100%
        ]))
    ]),
    transition('* => void', [
        animate(100, keyframes([
            style({ height: '*', opacity: 1, offset: 0 }), // 与之对应，让元素从显示到隐藏一个过渡
            style({ height: '0', opacity: 0, offset: 1 })
        ]))
    ]),
]);
