### 描述
常用校验函数和正则表达式，如校验身份证，手机号码，邮箱，日期，车牌号，QQ号，微信号等等。

### 安装
`npm i wj-validate-fn -S`

### 函数列表
| 函数名称 | 说明 | 返回 |
| ------- | ---- | ---- |
| validateEmpty | 是否是空 | boolean |
| validatePhone | 校验手机号 | boolean |
| validateIDCard | 校验身份证号码 | boolean |
| validateEmail | 校验邮箱 | boolean |
| validateLetter | 校验是否是英文字母 | boolean |
| validateDate | 验证日期格式是否为YYYY-MM-DD格式 | boolean |
| validateDateTime | 验证日期格式是否为YYYY-MM-DD hh:mm:ss格式 | boolean |
| validateInteger | 验证整数 | boolean |
| validateDouble | 验证双精度 | boolean |
| validateChinese | 校验中文 | boolean |
| validateUsername | 校验用户名，4到16位（字母，数字，下划线，减号） | boolean |
| validatePwd | 校验密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符 | boolean |
| validateIpv4 | 校验ipv4 | boolean |
| validateRGB | 校验RGB颜色 #ffffff | boolean |
| vlaidateQQ | 校验QQ号码，5至11位 | boolean |
| validateWx | 校验微信号，6至20位，以字母开头，字母，数字，减号，下划线 | boolean |
| validateCarId | 校验车牌号 | boolean |
| validateIncludeCN | 校验是否包含中文 | boolean |

### 使用
```javascript
    import { validatePhone } from 'wj-validate-fn';

    validatePhone("18716380495");
```

### 仓库地址
<https://github.com/WJjack/wj-validate-fn.git>

