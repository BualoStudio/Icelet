(function (Scratch) {
    'use strict';
  
    // 确保扩展是在 TurboWarp 或支持 Scratch API 的环境中运行
    if (!Scratch.extensions) {
      throw new Error('This extension requires Scratch/TurboWarp.');
    }
  
    // 初始化本地化翻译功能
    const formatMessage = Scratch.translate;
    if (formatMessage.setup) {
      formatMessage.setup({
        'en': {
          'accurateResolution.name': 'Accurate Resolution',
          'accurateResolution.width': 'screen width',
          'accurateResolution.height': 'screen height'
        },
        'zh-cn': {
          'accurateResolution.name': '更精确的分辨率',
          'accurateResolution.width': '屏幕宽度',
          'accurateResolution.height': '屏幕高度'
        }
      });
    }
  
    class AccurateResolution {
      getInfo() {
        return {
          id: 'accurateResolution',
          name: formatMessage({ id: 'accurateResolution.name', default: 'Accurate Resolution' }),
          // 使用与外观/侦测模块相似的蓝色或根据喜好自定义颜色
          color1: '#4C97FF', 
          color2: '#3373CC',
          color3: '#3373CC',
          blocks: [
            {
              opcode: 'getScreenWidth',
              blockType: Scratch.BlockType.REPORTER,
              text: formatMessage({ id: 'accurateResolution.width', default: 'screen width' })
            },
            {
              opcode: 'getScreenHeight',
              blockType: Scratch.BlockType.REPORTER,
              text: formatMessage({ id: 'accurateResolution.height', default: 'screen height' })
            }
          ]
        };
      }
  
      getScreenWidth() {
        // window.devicePixelRatio 是动态的，会自动获取当前设备的缩放比
        // 桌面端：100%缩放时为1，125%为1.25，150%为1.5
        // 移动端：视网膜屏幕根据硬件规格自动设为 2.0、3.0 甚至 2.75 等
        const dpr = window.devicePixelRatio || 1;
        const physicalWidth = Math.round(window.screen.width * dpr);
        return physicalWidth;
      }
  
      getScreenHeight() {
        const dpr = window.devicePixelRatio || 1;
        const physicalHeight = Math.round(window.screen.height * dpr);
        return physicalHeight;
      }
    }
  
    // 注册扩展
    Scratch.extensions.register(new AccurateResolution());
  })(Scratch);