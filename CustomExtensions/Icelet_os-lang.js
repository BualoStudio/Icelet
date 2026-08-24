(function (Scratch) {
  'use strict';

  // 1. 配置 TurboWarp 多语言支持 (i18n)
  if (Scratch.translate) {
    Scratch.translate.setup({
      'zh-cn': {
        extName: '操作系统语言',
        blockName: '操作系统语言'
      },
      'en': {
        extName: 'OS lang',
        blockName: 'OS language'
      }
    });
  }

  // 获取多语言文本的辅助函数
  const msg = (id, defaultText) => {
    if (Scratch.translate) {
      return Scratch.translate({ id: id, default: defaultText });
    }
    return defaultText;
  };

  /**
   * 具有显著书写变种或地区差异的语言列表
   * 例如：中文（zh_CN / zh_TW）、葡萄牙语（pt_BR / pt_PT）
   */
  const VARIANT_LANGUAGES = ['zh', 'pt'];

  /**
   * 识别并格式化当前运行环境的操作系统语言
   * @returns {string} 格式化后的语言代码，如 'zh_CN', 'zh_TW', 'ja', 'en'
   */
  function getNormalizedOSLanguage() {
    // 兼容各类操作系统、浏览器内核、Electron 及 HTML 打包工具的语言获取接口
    let rawLocale = (
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage ||
      navigator.browserLanguage ||
      navigator.systemLanguage ||
      'en'
    ).trim();

    // 统一分隔符（如 zh-CN -> zh_CN）
    rawLocale = rawLocale.replace(/-/g, '_');

    const parts = rawLocale.split('_');
    const mainLang = parts[0].toLowerCase();
    const subTag = parts.slice(1).join('_');

    // 1. 处理中文 (zh) 及其变种
    if (mainLang === 'zh') {
      const lowerRaw = rawLocale.toLowerCase();
      // 匹配繁体字形或繁体常用地区（台湾、香港、澳门）
      if (
        lowerRaw.includes('hant') ||
        lowerRaw.includes('tw') ||
        lowerRaw.includes('hk') ||
        lowerRaw.includes('mo')
      ) {
        return 'zh_TW';
      }
      // 默认/简体中文（中国大陆、新加坡等）
      return 'zh_CN';
    }

    // 2. 处理带有主要地区变种的其他语言（如葡萄牙语 pt_BR）
    if (VARIANT_LANGUAGES.includes(mainLang)) {
      if (subTag) {
        const regionMatch = subTag.match(/([a-zA-Z]{2})/);
        if (regionMatch) {
          return `${mainLang}_${regionMatch[1].toUpperCase()}`;
        }
      }
      if (mainLang === 'pt') return 'pt_BR';
    }

    // 3. 无主要书写变种的语言（如日语 ja、韩语 ko、德语 de、英语 en 等），只输出主语言代码
    return mainLang;
  }

  // 2. 定义 TurboWarp 扩展类
  class OSLangExtension {
    getInfo() {
      return {
        id: 'oslang',
        name: msg('extName', '操作系统语言 (OS lang)'),
        color1: '#4C97FF', // Scratch 主题蓝
        color2: '#3373CC',
        color3: '#2E63B8',
        blocks: [
          {
            opcode: 'getOSLang',
            blockType: Scratch.BlockType.REPORTER, // 圆形返回值积木
            text: msg('blockName', '操作系统语言'),
            disableMonitor: false
          }
        ]
      };
    }

    // 积木执行逻辑
    getOSLang() {
      return getNormalizedOSLanguage();
    }
  }

  // 3. 注册扩展
  Scratch.extensions.register(new OSLangExtension());
})(Scratch);