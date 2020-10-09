export const regEmpty = /\s/; // 空正则
export const regPhone = /^1[3456789]\d{9}$/; // 手机号码正则
export const regIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; // 身份证正则
export const regEmail = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; // 邮箱正则
export const regLetter = /^[a-zA-Z]+$/; // 英文字母
export const regDate = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/; // 期格式为YYYY-MM-DD格式
export const regDateTime = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; // 日期格式为YYYY-MM-DD hh:mm:ss格式
export const regInteger = /^[-+]?\d*$/; // 整数
export const regDouble = /^[-\+]?\d+(\.\d+)?$/; // 双精度
export const regChinese = /^[\u0391-\uFFE5]+$/; // 中文
//用户名正则，4到16位（字母，数字，下划线，减号）
export const regUsername = /^[a-zA-Z0-9_-]{4,16}$/; 
//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
export const regPwd = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/; 
// ipv4地址正则
export const regIpv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
// RGB Hex颜色正则
export const regRGB = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
export const regQQ = /^[1-9][0-9]{4,10}$/; // QQ号正则，5至11位
export const regWx = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/; // 微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
// 车牌号正则
export const regCarId = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
export const regIncludeCN = /[\u4E00-\u9FA5]/; // 包含中文的正则

/**
 * @description 校验是否是空
 * @param value 
 * @returns boolean
 */
export function validateEmpty(value: any): boolean {
    return (value === null || value === undefined || value === '' || regEmpty.test(value));
    // return regEmpty.test(value);
}

/**
 * @description 校验是否是手机号码
 * @param phone 
 * @returns boolean
 */
export function validatePhone(phone: string): boolean {
    const str = phone.trim();
    return regPhone.test(phone);
}

/**
 * @description 校验是否是身份证号码
 * @param card 
 * @returns boolean
 */
export function validateIDCard(card: string): boolean {
    const str = card.trim();
    return regIdCard.test(card);
}

/**
 * @description 校验是否是邮箱
 * @param email 
 * @returns boolean
 */
export function validateEmail(email: string) {
    const str = email.trim();
    return regEmail.test(str);
}

/**
 * @description 校验是否是英文字母
 * @param value 
 * @returns boolean
 */
export function validateLetter(value: string): boolean {
    const str = value.trim();
    return regLetter.test(str);
}

/**
 * @description 验证日期格式是否为YYYY-MM-DD格式
 * @param value 
 * @returns boolean
 */
export function validateDate(value: string): boolean {
    const str = value.trim();
    return regDate.test(str);
}

/**
 * @description 验证日期格式是否为YYYY-MM-DD hh:mm:ss格式
 * @param value 
 * @returns boolean
 */
export function validateDateTime(value: string): boolean {
    const str = value.trim();
    return regDateTime.test(str);
}

/**
 * @description 验证整数
 * @param value 
 * @returns boolean
 */
export function validateInteger(value: string | number): boolean {
    return regInteger.test(value + '');
}

/**
 * @description 验证双精度
 * @param value 
 * @returns boolean 
 */
export function validateDouble(value: string | number) {
    return regDouble.test(value + '')
}

/**
 * @description 校验中文
 * @param value 
 * @returns boolean
 */
export function validateChinese(value: string): boolean {
    const str = value.trim();
    return regChinese.test(str);
}

/**
 * @description 校验用户名，4到16位（字母，数字，下划线，减号）
 * @param value 
 * @returns boolean
 */
export function validateUsername(value: string): boolean {
    const str = value.trim();
    return regUsername.test(str);
}

/**
 * @description 校验密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * @param value 
 */
export function validatePwd(value: string): boolean {
    const str = value.trim();
    return regPwd.test(str);
}

/**
 * @description 校验ipv4
 * @param value 
 * @returns boolean
 */
export function validateIpv4(value: string): boolean {
    const str = value.trim();
    return regIpv4.test(str);
}

/**
 * @description 校验RGB颜色 #ffffff
 * @param value 
 * @returns boolean
 */
export function validateRGB(value: string): boolean {
    const str = value.trim();
    return regRGB.test(str);
}

/**
 * @description 校验QQ号码，5至11位
 * @param value 
 */
export function vlaidateQQ(value: string | number): boolean {
    return regQQ.test(value + '');
}

/**
 * @description 校验微信号，6至20位，以字母开头，字母，数字，减号，下划线
 * @param value 
 * @returns boolean
 */
export function validateWx(value: string): boolean {
    const str = value.trim();
    return regWx.test(str);
}

/**
 * @description 校验车牌号
 * @param value 
 * @returns boolean
 */
export function validateCarId(value: string): boolean {
    const str = value.trim();
    return regCarId.test(str);
}

/**
 * @description 校验是否包含中文
 * @param value 
 * @returns boolean
 */
export function validateIncludeCN(value: string): boolean {
    const str = value.trim();
    return regIncludeCN.test(str);
}
