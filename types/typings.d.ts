
declare module '*.css';
declare module '*.less';
declare module 'components/*';
declare module 'models/*';
declare module 'config';
declare module 'functions/*';
declare module 'assets/*';
declare module 'routes/*';
declare module 'types/*';
declare module 'utils/*';
declare module 'api';
declare module 'store';
declare module 'moment';
declare module 'fundcharts';
// declare module 'form-render/lib/antd';
declare module '*.png';
declare module '*.json';
// declare module 'enquire.js';
declare namespace _{
    export let nowyear: any;
    export let fn: any;
    export let platform: any;
    export let queryUserInfo: any;
}
declare module 'form-render/lib/antd' {
    import React from 'react';
    export interface FRProps {
        propsSchema?: object;
        schema?: object;
        formData: object;
        onChange(data?: object): void;
        // onMount?(): void;
        name?: string;
        column?: number;
        uiSchema?: object;
        widgets?: any;
        FieldUI?: any;
        fields?: any;
        mapping?: object;
        showDescIcon?: boolean;
        showValidate?: boolean;
        displayType?: string;
        onValidate: any;
        readOnly?: boolean;
        labelWidth?: number | string;

    }
    class FormRender extends React.Component<FRProps> {}
    export default FormRender;
}