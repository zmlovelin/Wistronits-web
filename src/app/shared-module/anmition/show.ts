/**定义动画的ts文件**/
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// 定义一个鼠标点击运动的动画box样式的元素会向左向右移动。
export const boxAnimate = trigger('box', [
    // 定义一个状态left
    state('left', style({ transform: 'translate3d(0,0,0)' })),
    // 定义另外一个状态right
    state('right', style({ transform: 'translate3d(200%,0,0)' })),
    // 定义运动过程(从left到right状态)
    transition('left=>right', animate(2000, keyframes([
        style({ transform: 'translate3d(300%,0,0)' })
    ]))),
    // 定义运动过程(从right到left)
    transition('right=>left', animate(1000, keyframes([
        style({ transform: 'translate3d(-100%,0,0)' }),
    ]))),
]);
