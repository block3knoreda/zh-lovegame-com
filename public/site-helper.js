(function() {
    'use strict';

    var config = {
        siteUrl: 'https://zh-lovegame.com',
        keyword: '爱游戏'
    };

    function createCard(title, description) {
        var card = document.createElement('div');
        card.className = 'site-helper-card';
        card.style.cssText = 'border:1px solid #e0e0e0;border-radius:8px;padding:16px;margin:16px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,0.1);';
        var titleEl = document.createElement('h3');
        titleEl.textContent = title;
        titleEl.style.cssText = 'margin:0 0 8px 0;font-size:18px;color:#333;';
        var descEl = document.createElement('p');
        descEl.textContent = description;
        descEl.style.cssText = 'margin:0;font-size:14px;color:#666;line-height:1.5;';
        card.appendChild(titleEl);
        card.appendChild(descEl);
        return card;
    }

    function createBadge(text, color) {
        var badge = document.createElement('span');
        badge.className = 'site-helper-badge';
        badge.textContent = text;
        badge.style.cssText = 'display:inline-block;padding:4px 10px;margin:4px;border-radius:12px;font-size:12px;font-weight:bold;color:#fff;background-color:' + (color || '#007bff') + ';';
        return badge;
    }

    function createNotice(text) {
        var notice = document.createElement('div');
        notice.className = 'site-helper-notice';
        notice.style.cssText = 'padding:12px 16px;margin:12px 0;border-left:4px solid #ffc107;background:#fff8e1;font-size:14px;color:#856404;border-radius:4px;';
        notice.textContent = text;
        return notice;
    }

    function init() {
        var container = document.getElementById('site-helper-root');
        if (!container) {
            container = document.createElement('div');
            container.id = 'site-helper-root';
            container.style.cssText = 'max-width:800px;margin:20px auto;padding:0 16px;';
            var first = document.body.firstChild;
            if (first) {
                document.body.insertBefore(container, first);
            } else {
                document.body.appendChild(container);
            }
        }

        var heading = document.createElement('h2');
        heading.textContent = '🔧 页面助手';
        heading.style.cssText = 'font-size:24px;margin-bottom:16px;color:#2c3e50;';
        container.appendChild(heading);

        var card = createCard(
            '欢迎来到 ' + config.siteUrl,
            '探索 ' + config.keyword + ' 相关精彩内容，获取最新资讯与资源。'
        );
        container.appendChild(card);

        var badgeContainer = document.createElement('div');
        badgeContainer.style.cssText = 'margin:16px 0;';
        var badges = [
            { text: config.keyword, color: '#28a745' },
            { text: '热门推荐', color: '#dc3545' },
            { text: '最新更新', color: '#17a2b8' },
            { text: '精选内容', color: '#6f42c1' }
        ];
        badges.forEach(function(item) {
            badgeContainer.appendChild(createBadge(item.text, item.color));
        });
        container.appendChild(badgeContainer);

        var notice = createNotice('💡 提示：使用侧边栏或搜索框快速定位您感兴趣的内容。本站持续更新，敬请关注。');
        container.appendChild(notice);

        var info = document.createElement('p');
        info.style.cssText = 'font-size:12px;color:#999;margin-top:24px;border-top:1px solid #eee;padding-top:12px;';
        info.textContent = '© 辅助组件 | 数据来源: ' + config.siteUrl;
        container.appendChild(info);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();