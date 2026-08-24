(function(Scratch) {
    'use strict';

    // 确保在 TurboWarp 的非沙盒环境下运行，因为我们需要访问 VM 和 Runtime 的深层属性
    if (!Scratch.extensions.unsandboxed) {
        throw new Error('Size Scaling extension must be run unsandboxed.');
    }

    // 设置多语言支持 (简体中文和英语)
    Scratch.translate.setup({
        'zh-cn': {
            name: '大小缩放',
            setSize: '将大小设为 [SIZE]% 以 [CENTER] 为中心',
            changeSize: '将大小增加 [SIZE]% 以 [CENTER] 为中心',
            stageCenter: '舞台中心',
            mousePointer: '鼠标指针'
        },
        'en': {
            name: 'Size Scaling',
            setSize: 'set size to [SIZE]% with center [CENTER]',
            changeSize: 'change size by [SIZE]% with center [CENTER]',
            stageCenter: 'Stage Center',
            mousePointer: 'Mouse Pointer'
        }
    });

    class SizeScaling {
        getInfo() {
            return {
                id: 'sizeScaling',
                name: Scratch.translate({ id: 'name', default: 'Size Scaling' }),
                // 使用外观(Looks)分类的标准紫色
                color1: '#9966FF',
                color2: '#855CD6',
                color3: '#774DCB',
                blocks: [
                    {
                        opcode: 'setSizeCenter',
                        blockType: Scratch.BlockType.COMMAND,
                        text: Scratch.translate({ id: 'setSize', default: 'set size to [SIZE]% with center [CENTER]' }),
                        arguments: {
                            SIZE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            CENTER: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'centerMenu'
                            }
                        }
                    },
                    {
                        opcode: 'changeSizeCenter',
                        blockType: Scratch.BlockType.COMMAND,
                        text: Scratch.translate({ id: 'changeSize', default: 'change size by [SIZE]% with center [CENTER]' }),
                        arguments: {
                            SIZE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 10
                            },
                            CENTER: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'centerMenu'
                            }
                        }
                    }
                ],
                menus: {
                    centerMenu: {
                        acceptReporters: true,
                        // 动态获取下拉菜单内容
                        items: 'getCenterMenu'
                    }
                }
            };
        }

        getCenterMenu() {
            // 基础选项：舞台中心、鼠标指针
            const menu = [
                { text: Scratch.translate({ id: 'stageCenter', default: 'Stage Center' }), value: '_stage_' },
                { text: Scratch.translate({ id: 'mousePointer', default: 'Mouse Pointer' }), value: '_mouse_' }
            ];
            
            // 遍历 Scratch 运行时的所有目标角色，将其加入到列表中
            if (Scratch.vm && Scratch.vm.runtime) {
                const targets = Scratch.vm.runtime.targets;
                for (const target of targets) {
                    // 只添加原始角色，排除舞台(Stage)和克隆体(Clones)
                    if (target.isOriginal && !target.isStage) {
                        menu.push({
                            text: target.sprite.name,
                            value: target.sprite.name
                        });
                    }
                }
            }
            return menu;
        }

        setSizeCenter(args, util) {
            const targetSize = Scratch.Cast.toNumber(args.SIZE);
            const center = args.CENTER;
            this._applyScale(util, targetSize, center, false);
        }

        changeSizeCenter(args, util) {
            const sizeDelta = Scratch.Cast.toNumber(args.SIZE);
            const center = args.CENTER;
            this._applyScale(util, sizeDelta, center, true);
        }

        _applyScale(util, amount, center, isChange) {
            const target = util.target;
            if (!target) return;

            const oldSize = target.size;
            // 计算应该设置的请求尺寸
            const requestedSize = isChange ? (oldSize + amount) : amount;
            
            // 记录当前的坐标
            const oldX = target.x;
            const oldY = target.y;

            // 调用原版引擎的方法设置大小，这能够触发原版引擎对尺寸上下限的自动限制(Clamping)
            target.setSize(requestedSize);
            
            // 获取原版限制后的实际尺寸
            const newSize = target.size;

            // 如果大小没有发生任何改变（或者等于0，尽管原版Scratch最小通常是5左右），则不需要移动位置
            if (oldSize === newSize || oldSize === 0) {
                return;
            }

            // 计算实际的缩放比例参数 K
            const k = newSize / oldSize;

            // 寻找缩放中心的坐标
            let cx = 0;
            let cy = 0;

            if (center === '_stage_') {
                cx = 0;
                cy = 0;
            } else if (center === '_mouse_') {
                cx = util.ioQuery('mouse', 'getX');
                cy = util.ioQuery('mouse', 'getY');
            } else {
                // 如果菜单传入的是某个角色的名称
                let found = false;
                
                // 1. 如果缩放中心恰好是自身这个角色（表现逻辑和原版积木完全一致，不移动坐标）
                if (target.sprite && target.sprite.name === center) {
                    cx = oldX;
                    cy = oldY;
                    found = true;
                } else {
                    // 2. 寻找其他对应名字的角色
                    const centerTarget = util.runtime.targets.find(t => t.isOriginal && !t.isStage && t.sprite.name === center);
                    if (centerTarget) {
                        cx = centerTarget.x;
                        cy = centerTarget.y;
                        found = true;
                    }
                }
                
                // 如果角色被意外删除了找不到，缺省回滚到舞台中心进行计算
                if (!found) {
                    cx = 0;
                    cy = 0;
                }
            }

            // 使用2D仿射变换计算缩放后的新坐标 (X2 = Cx + k*(X1-Cx))
            const newX = cx + k * (oldX - cx);
            const newY = cy + k * (oldY - cy);

            // 更新当前角色的坐标到计算出的位置
            target.setXY(newX, newY);
        }
    }

    Scratch.extensions.register(new SizeScaling());
})(Scratch);