import React, { useState} from 'react';
import './App.css';
import FormRender from 'form-render/lib/antd';

interface AppProps {}

const FORM_JSON = {
    "type": "object",
    "properties": {
        "fundName": {
            "type": "string",
            "title": "基金名称",
            "ui:width": "33.3%"
        },
        "fundCode": {
            "type": "string",
            "title": "基金代码",
            "ui:width": "33.3%"
        },
        "theme": {
            "type": "string",
            "title": "主题概念",
            "ui:width": "33.3%"
        },
        "profits": {
            "type": "string",
            "title": "收益区间",
            "enum": [
                "rate",
                "week",
                "month",
                "tmonth",
                "hyear",
                "year",
                "tyear",
                "now"
            ],
            "enumNames": [
                "昨日涨幅",
                "近一周涨幅",
                "近一月涨幅",
                "近三月涨幅",
                "近六月涨幅",
                "近一年涨幅",
                "近三年涨幅",
                "成立以来"
            ],
            "ui:width": "50%"
        },
        "btnText": {
            "type": "string",
            "title": "按钮文案",
            "maxLength": 4,
            "description": "不超过4个字符",
            "ui:width": "50%"
        },
        "operateSystemImg": {
            "type": "string",
            "title": "运营位图片",
            "description": "运营位图片链接，非必传，推荐尺寸600*100",
            "ui:width": "50%"
        },
        "operateSystemUrl": {
            "type": "string",
            "title": "运营位跳转链接",
            "ui:width": "50%"
        },
        "themeCircle": {
            "title": "圈子",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "title": "主题名称",
                        "type": "string",
                        "ui:width": "33%"
                    },
                    "code": {
                        "title": "主题代码",
                        "type": "string",
                        "ui:width": "33%"
                    },
                    "circleCode": {
                        "title": "圈子代码",
                        "type": "string",
                        "ui:width": "33%"
                    },

                    "icon": {
                        "title": "圈子头像",
                        "type": "string"
                    },
                    "url": {
                        "title": "圈子跳转链接",
                        "type": "string"
                    }

                },
                "required": [
                    "code",
                    "circleCode",
                    "icon",
                    "url"
                ]
            }

        }
    },
    "required": [
        "fundName",
        "theme",
        "profits",
        "btnText",
        "fundCode"
    ]
}
function App({}: AppProps) {
    const [data, setData] = useState({})
    const [vaild, setValid] = useState([])

    return (
        <div className="App">
            <FormRender
                schema={FORM_JSON}
                formData={data}
                onChange={setData}
                onValidate={setValid}
            />
        </div>
    );
}

export default App;
