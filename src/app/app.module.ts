import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {AppComponent} from './app.component';

/** 配置 angular i18n **/
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {BusinessModule} from './business-module/business.module';
import {AppRoutingModule} from './app-routing.module';
import {SharedModuleModule} from './shared-module/shared-module.module';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {CommonUtil} from './shared-module/util/common-util';
registerLocaleData(zh);
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    BusinessModule,
    SharedModuleModule
  ],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers: [
    {provide: NZ_I18N, useValue: CommonUtil.toggleNZi18n()},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
