/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../../src/app/components/trips/trip-edit/trip-edit.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from '@ngrx/store/src/store';
import * as import10 from '@angular/router/src/router';
import * as import11 from '../../../../../../src/app/services/trips.service';
import * as import12 from './trip-edit.component.scss.shim.ngstyle';
import * as import13 from '../../../../../../src/app/components/trips/trip-edit/add-place/add-place.component';
import * as import14 from './add-place/add-place.component.ngfactory';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '@angular/core/src/change_detection/change_detection_util';
import * as import17 from '../../../../../../src/app/services/cloudinary-integration.service';
import * as import18 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '../../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import22 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import23 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import24 from '../../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import25 from '../../../../../node_modules/angular2-autosize/src/autosize.directive.ngfactory';
import * as import26 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import27 from '@angular/core/src/linker/element_ref';
import * as import28 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import29 from '@angular/forms/src/directives/default_value_accessor';
import * as import30 from '@angular/forms/src/directives/control_value_accessor';
import * as import31 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import32 from '@angular/forms/src/directives/ng_control';
import * as import33 from '@angular/forms/src/directives/ng_control_status';
import * as import34 from 'angular2-autosize/src/autosize.directive';
import * as import35 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import36 from '@angular/forms/src/directives/control_container';
import * as import37 from '@angular/common/src/directives/ng_for';
export var Wrapper_TripEditComponent = (function () {
    function Wrapper_TripEditComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.TripEditComponent(p0, p1, p2, p3);
    }
    Wrapper_TripEditComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TripEditComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_TripEditComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TripEditComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_TripEditComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_TripEditComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_TripEditComponent;
}());
var renderType_TripEditComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_TripEditComponent_Host0 = (function (_super) {
    __extends(View_TripEditComponent_Host0, _super);
    function View_TripEditComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TripEditComponent_Host0, renderType_TripEditComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_TripEditComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'tr-trip-edit', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_TripEditComponent0(this.viewUtils, this, 0, this._el_0);
        this._TripEditComponent_0_3 = new Wrapper_TripEditComponent(this.injectorGet(import8.FormBuilder, this.parentIndex), this.injectorGet(import9.Store, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex), this.injectorGet(import11.TripsService, this.parentIndex));
        this.compView_0.create(this._TripEditComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._TripEditComponent_0_3.context);
    };
    View_TripEditComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TripEditComponent) && (0 === requestNodeIndex))) {
            return this._TripEditComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_TripEditComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TripEditComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_TripEditComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_TripEditComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TripEditComponent_Host0;
}(import1.AppView));
export var TripEditComponentNgFactory = new import7.ComponentFactory('tr-trip-edit', View_TripEditComponent_Host0, import0.TripEditComponent);
var styles_TripEditComponent = [import12.styles];
var View_TripEditComponent2 = (function (_super) {
    __extends(View_TripEditComponent2, _super);
    function View_TripEditComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_TripEditComponent2, renderType_TripEditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_16 = import16.UNINITIALIZED;
    }
    View_TripEditComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h4', new import3.InlineArray2(2, 'class', 'ui horizontal divider header'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'i', new import3.InlineArray2(2, 'class', 'train big icon'), null);
        this._text_5 = this.renderer.createText(this._el_2, '', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, 'Remove', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'i', new import3.InlineArray2(2, 'class', 'remove icon'), null);
        this._text_11 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_0, 'tr-add-place', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_12 = new import14.View_AddPlaceComponent0(this.viewUtils, this, 12, this._el_12);
        this._AddPlaceComponent_12_3 = new import14.Wrapper_AddPlaceComponent(this.parentView.parentView.parentView.injectorGet(import8.FormBuilder, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import17.CloudinaryIntegrationService, this.parentView.parentView.parentIndex));
        this.compView_12.create(this._AddPlaceComponent_12_3.context);
        this._text_13 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_10));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_12, new import3.InlineArray2(2, 'newPlace', null), this.eventHandler(this.handleEvent_12));
        this._AddPlaceComponent_12_3.subscribe(this, this.eventHandler(this.handleEvent_12), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_TripEditComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.AddPlaceComponent) && (12 === requestNodeIndex))) {
            return this._AddPlaceComponent_12_3.context;
        }
        return notFoundResult;
    };
    View_TripEditComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_12_0_0 = this.parentView.context.$implicit;
        this._AddPlaceComponent_12_3.check_place(currVal_12_0_0, throwOnChange, false);
        this._AddPlaceComponent_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_16 = import3.inlineInterpolate(1, '\n        ', this.parentView.context.$implicit.name, '\n      ');
        if (import3.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setText(this._text_5, currVal_16);
            this._expr_16 = currVal_16;
        }
        this.compView_12.internalDetectChanges(throwOnChange);
    };
    View_TripEditComponent2.prototype.destroyInternal = function () {
        this.compView_12.destroy();
        this._AddPlaceComponent_12_3.ngOnDestroy();
    };
    View_TripEditComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TripEditComponent2.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.removePlace(this.parentView.context.$implicit, this.parentView.context.index) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_TripEditComponent2.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'newPlace')) {
            var pd_sub_0 = (this.parentView.parentView.context.updatePlace($event, this.parentView.context.index) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TripEditComponent2;
}(import1.AppView));
var View_TripEditComponent1 = (function (_super) {
    __extends(View_TripEditComponent1, _super);
    function View_TripEditComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_TripEditComponent1, renderType_TripEditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_TripEditComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'place-form ten wide right aligned column ui card'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import15.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import19.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import18.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_TripEditComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import20.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_TripEditComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.context.$implicit._destroy;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_TripEditComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_TripEditComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TripEditComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_TripEditComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_TripEditComponent1;
}(import1.AppView));
var renderType_TripEditComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_TripEditComponent, {});
export var View_TripEditComponent0 = (function (_super) {
    __extends(View_TripEditComponent0, _super);
    function View_TripEditComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TripEditComponent0, renderType_TripEditComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_TripEditComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'trip ui centered grid cards'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'trip-form ten wide column ui card'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'form', new import3.InlineArray2(2, 'class', 'ui form'), null);
        this._FormGroupDirective_4_3 = new import21.Wrapper_FormGroupDirective(null, null);
        this._ControlContainer_4_4 = this._FormGroupDirective_4_3.context;
        this._NgControlStatusGroup_4_5 = new import22.Wrapper_NgControlStatusGroup(this._ControlContainer_4_4);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'field'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'input', new import3.InlineArray8(8, 'class', 'trip-title', 'formControlName', 'name', 'placeholder', 'Title', 'type', 'text'), null);
        this._DefaultValueAccessor_8_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer, new import27.ElementRef(this._el_8));
        this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3.context];
        this._FormControlName_8_5 = new import24.Wrapper_FormControlName(this._ControlContainer_4_4, null, null, this._NG_VALUE_ACCESSOR_8_4);
        this._NgControl_8_6 = this._FormControlName_8_5.context;
        this._NgControlStatus_8_7 = new import22.Wrapper_NgControlStatus(this._NgControl_8_6);
        this._text_9 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_6, 'button', new import3.InlineArray4(4, 'class', 'ui big button save-button', 'type', 'submit'), null);
        this._text_11 = this.renderer.createText(this._el_10, 'Publish', null);
        this._text_12 = this.renderer.createText(this._el_6, '\n      ', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'field'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'textarea', new import3.InlineArray8(8, 'autosize', '', 'class', 'trip-description', 'formControlName', 'description', 'placeholder', 'Where is it about?'), null);
        this._DefaultValueAccessor_16_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer, new import27.ElementRef(this._el_16));
        this._NG_VALUE_ACCESSOR_16_4 = [this._DefaultValueAccessor_16_3.context];
        this._FormControlName_16_5 = new import24.Wrapper_FormControlName(this._ControlContainer_4_4, null, null, this._NG_VALUE_ACCESSOR_16_4);
        this._NgControl_16_6 = this._FormControlName_16_5.context;
        this._NgControlStatus_16_7 = new import22.Wrapper_NgControlStatus(this._NgControl_16_6);
        this._Autosize_16_8 = new import25.Wrapper_Autosize(new import27.ElementRef(this._el_16));
        this._text_17 = this.renderer.createText(this._el_14, '\n      ', null);
        this._text_18 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_21 = new import15.ViewContainer(21, 0, this, this._anchor_21);
        this._TemplateRef_21_5 = new import19.TemplateRef_(this, 21, this._anchor_21);
        this._NgFor_21_6 = new import26.Wrapper_NgFor(this._vc_21.vcRef, this._TemplateRef_21_5, this.parentView.injectorGet(import28.IterableDiffers, this.parentIndex), this.ref);
        this._text_22 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'place-form ten wide column ui card'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n    ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'h4', new import3.InlineArray2(2, 'class', 'ui horizontal divider header'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n      ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'i', new import3.InlineArray2(2, 'class', 'train big icon'), null);
        this._text_28 = this.renderer.createText(this._el_25, '\n      New Place\n    ', null);
        this._text_29 = this.renderer.createText(this._el_23, '\n    ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_23, 'tr-add-place', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_30 = new import14.View_AddPlaceComponent0(this.viewUtils, this, 30, this._el_30);
        this._AddPlaceComponent_30_3 = new import14.Wrapper_AddPlaceComponent(this.parentView.injectorGet(import8.FormBuilder, this.parentIndex), this.parentView.injectorGet(import17.CloudinaryIntegrationService, this.parentIndex));
        this.compView_30.create(this._AddPlaceComponent_30_3.context);
        this._text_31 = this.renderer.createText(this._el_23, '\n  ', null);
        this._text_32 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_4));
        this._FormGroupDirective_4_3.subscribe(this, this.eventHandler(this.handleEvent_4), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_8));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_16, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_16));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_30, new import3.InlineArray2(2, 'newPlace', null), this.eventHandler(this.handleEvent_30));
        this._AddPlaceComponent_30_3.subscribe(this, this.eventHandler(this.handleEvent_30), true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._anchor_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_TripEditComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import29.DefaultValueAccessor) && (8 === requestNodeIndex))) {
            return this._DefaultValueAccessor_8_3.context;
        }
        if (((token === import30.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_8_4;
        }
        if (((token === import31.FormControlName) && (8 === requestNodeIndex))) {
            return this._FormControlName_8_5.context;
        }
        if (((token === import32.NgControl) && (8 === requestNodeIndex))) {
            return this._NgControl_8_6;
        }
        if (((token === import33.NgControlStatus) && (8 === requestNodeIndex))) {
            return this._NgControlStatus_8_7.context;
        }
        if (((token === import29.DefaultValueAccessor) && (16 === requestNodeIndex))) {
            return this._DefaultValueAccessor_16_3.context;
        }
        if (((token === import30.NG_VALUE_ACCESSOR) && (16 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_16_4;
        }
        if (((token === import31.FormControlName) && (16 === requestNodeIndex))) {
            return this._FormControlName_16_5.context;
        }
        if (((token === import32.NgControl) && (16 === requestNodeIndex))) {
            return this._NgControl_16_6;
        }
        if (((token === import33.NgControlStatus) && (16 === requestNodeIndex))) {
            return this._NgControlStatus_16_7.context;
        }
        if (((token === import34.Autosize) && (16 === requestNodeIndex))) {
            return this._Autosize_16_8.context;
        }
        if (((token === import35.FormGroupDirective) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._FormGroupDirective_4_3.context;
        }
        if (((token === import36.ControlContainer) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._ControlContainer_4_4;
        }
        if (((token === import33.NgControlStatusGroup) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._NgControlStatusGroup_4_5.context;
        }
        if (((token === import19.TemplateRef) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === import37.NgFor) && (21 === requestNodeIndex))) {
            return this._NgFor_21_6.context;
        }
        if (((token === import13.AddPlaceComponent) && (30 === requestNodeIndex))) {
            return this._AddPlaceComponent_30_3.context;
        }
        return notFoundResult;
    };
    View_TripEditComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.context.tripForm;
        this._FormGroupDirective_4_3.check_form(currVal_4_0_0, throwOnChange, false);
        this._FormGroupDirective_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        this._NgControlStatusGroup_4_5.ngDoCheck(this, this._el_4, throwOnChange);
        this._DefaultValueAccessor_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_8_1_0 = 'name';
        this._FormControlName_8_5.check_name(currVal_8_1_0, throwOnChange, false);
        this._FormControlName_8_5.ngDoCheck(this, this._el_8, throwOnChange);
        this._NgControlStatus_8_7.ngDoCheck(this, this._el_8, throwOnChange);
        this._DefaultValueAccessor_16_3.ngDoCheck(this, this._el_16, throwOnChange);
        var currVal_16_1_0 = 'description';
        this._FormControlName_16_5.check_name(currVal_16_1_0, throwOnChange, false);
        this._FormControlName_16_5.ngDoCheck(this, this._el_16, throwOnChange);
        this._NgControlStatus_16_7.ngDoCheck(this, this._el_16, throwOnChange);
        this._Autosize_16_8.ngDoCheck(this, this._el_16, throwOnChange);
        var currVal_21_0_0 = this.context.tripForm.value.places;
        this._NgFor_21_6.check_ngForOf(currVal_21_0_0, throwOnChange, false);
        this._NgFor_21_6.ngDoCheck(this, this._anchor_21, throwOnChange);
        this._AddPlaceComponent_30_3.ngDoCheck(this, this._el_30, throwOnChange);
        this._vc_21.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            this._Autosize_16_8.context.ngAfterContentChecked();
        }
        this._NgControlStatusGroup_4_5.checkHost(this, this, this._el_4, throwOnChange);
        this._NgControlStatus_8_7.checkHost(this, this, this._el_8, throwOnChange);
        this._NgControlStatus_16_7.checkHost(this, this, this._el_16, throwOnChange);
        this.compView_30.internalDetectChanges(throwOnChange);
    };
    View_TripEditComponent0.prototype.destroyInternal = function () {
        this._vc_21.destroyNestedViews();
        this.compView_30.destroy();
        this._FormControlName_8_5.ngOnDestroy();
        this._FormControlName_16_5.ngOnDestroy();
        this._FormGroupDirective_4_3.ngOnDestroy();
        this._AddPlaceComponent_30_3.ngOnDestroy();
    };
    View_TripEditComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 21)) {
            return new View_TripEditComponent1(this.viewUtils, this, 21, this._anchor_21, this._vc_21);
        }
        return null;
    };
    View_TripEditComponent0.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_4_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.onSubmit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_TripEditComponent0.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_8_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_TripEditComponent0.prototype.handleEvent_16 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_16_3.handleEvent(eventName, $event) && result);
        result = (this._Autosize_16_8.handleEvent(eventName, $event) && result);
        return result;
    };
    View_TripEditComponent0.prototype.handleEvent_30 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'newPlace')) {
            var pd_sub_0 = (this.context.addNewPlace($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TripEditComponent0;
}(import1.AppView));
//# sourceMappingURL=trip-edit.component.ngfactory.js.map