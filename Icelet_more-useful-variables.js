(function(Scratch) {
    'use strict';

    // 检查沙盒模式：由于我们需要读取 Scratch.vm 来获取列表变量，建议在非沙盒模式下运行
    if (!Scratch.extensions.unsandboxed) {
        console.warn('更有用的变量 (More Useful Variables) 扩展建议在 Unsandboxed (非沙盒) 模式下运行，以便完美支持列表检索。');
    }

    // 获取当前环境语言的辅助函数
    const getLocale = () => {
        let locale = 'en';
        // 尝试从 Scratch API 获取当前语言
        if (typeof Scratch !== 'undefined' && Scratch.translate && Scratch.translate.language) {
            locale = Scratch.translate.language;
        } else if (typeof navigator !== 'undefined') {
            locale = navigator.language.toLowerCase();
        }
        
        // 简单匹配中文（支持 zh-cn, zh-tw 等）
        if (locale.includes('zh')) {
            return 'zh-cn';
        }
        return 'en';
    };

    // 中英文翻译字典
    const i18n = {
        'en': {
            name: 'More Useful Variables',
            getLine: 'line [LINE] of [TEXT]',
            splitByEquals: '[SIDE] side of [TEXT] separated by " = "',
            left: 'left',
            right: 'right',
            findItem: 'item # in list [LIST] containing [SUBSTRING]'
        },
        'zh-cn': {
            name: '更有用的变量',
            getLine: '提取 [TEXT] 的第 [LINE] 行',
            splitByEquals: '提取 [TEXT] 中 " = " 的 [SIDE] 边',
            left: '左',
            right: '右',
            findItem: '列表 [LIST] 中包含 [SUBSTRING] 的第一项的编号'
        }
    };

    // 翻译提取函数
    const t = (key) => {
        const locale = getLocale();
        return i18n[locale] ? i18n[locale][key] : i18n['en'][key];
    };

    class MoreUsefulVariables {
        getInfo() {
            return {
                id: 'moreUsefulVariables',
                name: t('name'),
                // 采用 Scratch 默认的变量橙色主题
                color1: '#FF8C1A',
                color2: '#DB6E00',
                color3: '#DB6E00',
                blocks: [
                    {
                        // 积木1：提取第几行
                        opcode: 'getLine',
                        blockType: Scratch.BlockType.REPORTER,
                        text: t('getLine'),
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Line 1\nLine 2\nLine 3'
                            },
                            LINE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            }
                        }
                    },
                    {
                        // 积木2：识别 " = " 的左边或右边
                        opcode: 'splitByEquals',
                        blockType: Scratch.BlockType.REPORTER,
                        text: t('splitByEquals'),
                        arguments: {
                            SIDE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'SIDE_MENU'
                            },
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'HP = 100'
                            }
                        }
                    },
                    {
                        // 积木3：查找列表中包含特定文本的项的编号
                        opcode: 'findItemContaining',
                        blockType: Scratch.BlockType.REPORTER,
                        text: t('findItem'),
                        arguments: {
                            LIST: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'LIST_MENU'
                            },
                            SUBSTRING: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'text'
                            }
                        }
                    }
                ],
                menus: {
                    // 左右下拉菜单
                    SIDE_MENU: {
                        acceptReporters: true,
                        items: [
                            { text: t('left'), value: 'left' },
                            { text: t('right'), value: 'right' }
                        ]
                    },
                    // 动态获取当前项目中所有列表的下拉菜单
                    LIST_MENU: {
                        acceptReporters: true,
                        items: 'getAllLists'
                    }
                }
            };
        }

        // 动态菜单函数：获取项目中所有的列表名称
        getAllLists() {
            const lists = [];
            if (typeof Scratch !== 'undefined' && Scratch.vm) {
                // 遍历所有角色和舞台的变量，筛选出 type 为 'list' 的对象
                const targets = Scratch.vm.runtime.targets;
                for (const target of targets) {
                    if (target.isOriginal) { // 避免克隆体的重复列表
                        for (const id in target.variables) {
                            const variable = target.variables[id];
                            if (variable.type === 'list') {
                                if (!lists.includes(variable.name)) {
                                    lists.push(variable.name);
                                }
                            }
                        }
                    }
                }
            }
            // 如果项目中没有任何列表，提供一个空占位符避免积木渲染错误
            if (lists.length === 0) {
                return [{ text: '---', value: '' }];
            }
            return lists;
        }

        getLine(args) {
            const text = String(args.TEXT);
            const lineNum = Math.floor(Number(args.LINE)) || 1;
            
            // 安全处理：将 Windows 系统的回车换行符 \r\n 以及老式 Mac 的 \r 统一规范化为标准的 \n
            const cleanText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
            const lines = cleanText.split('\n');
            
            // 确保行号在合法范围内（Scratch 习惯从 1 开始计数）
            if (lineNum > 0 && lineNum <= lines.length) {
                return lines[lineNum - 1]; 
            }
            // 超出范围则返回空字符串
            return ""; 
        }

        splitByEquals(args) {
            let text = String(args.TEXT);
            
            // 安全处理：清除文本中任何残留的不可见回车符 \r 或换行符 \n，防止截取的内容带有隐藏尾缀
            text = text.replace(/[\r\n]/g, '');
            
            const side = args.SIDE;
            const delimiter = " = "; // 严格匹配带空格的 " = "
            
            // 寻找第一个 " = " 的位置
            const index = text.indexOf(delimiter);
            
            // 如果没找到 " = "，左侧返回全文，右侧返回空
            if (index === -1) {
                return side === 'left' ? text : "";
            }
            
            if (side === 'left') {
                return text.substring(0, index);
            } else if (side === 'right') {
                // 右侧部分返回第一个 " = " 之后的所有内容（考虑到可能存在多个 = 的情况）
                return text.substring(index + delimiter.length);
            }
            return "";
        }

        findItemContaining(args, util) {
            const listName = String(args.LIST);
            const substring = String(args.SUBSTRING);

            if (!listName) return 0;

            // 首先尝试在当前执行积木的角色下寻找该列表
            let list = util.target.lookupVariableByNameAndType(listName, 'list');
            
            // 如果当前角色找不到，说明可能是全局列表，尝试在舞台下寻找
            if (!list && !util.target.isStage) {
                const stage = util.target.runtime.getTargetForStage();
                if (stage) {
                    list = stage.lookupVariableByNameAndType(listName, 'list');
                }
            }

            // 如果找到了对应的列表，遍历寻找包含 substring 的项
            if (list) {
                const listContents = list.value;
                for (let i = 0; i < listContents.length; i++) {
                    // 安全转为 string 并进行包含匹配。因为没有直接切分字符串，所以不受单纯换行符切分逻辑的干扰
                    if (String(listContents[i]).includes(substring)) {
                        // 找到后立刻返回编号，Scratch 的列表序号是从 1 开始的
                        return i + 1; 
                    }
                }
            }

            // 没找到任何匹配项、或找不到对应名称的列表则返回 0
            return 0; 
        }
    }

    Scratch.extensions.register(new MoreUsefulVariables());

})(Scratch);