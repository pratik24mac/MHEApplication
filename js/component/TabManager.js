define([], function() {
    'use strict';

    function TabManager(argument) {
        this.$tabContainer;
        this.$selectedTab;
        this._handleEvents = handleEvents.bind(this);
    }
    TabManager.prototype.init = function(p_$tabContainer) {
        this.$tabContainer = p_$tabContainer;
        assignEvents.call(this);
        showPanel.call(this);
    }

    function assignEvents() {
        this.$tabContainer.on('click', '.tab', this._handleEvents);
    }

    function handleEvents(e) {
        var $tab = $(e.target);
        if ($tab.hasClass('selected')) { return; }

        showPanel.call(this, $tab);
    }

    function showPanel(p_$tab) {
        if (this.$selectedTab === undefined) {
            var $panels = this.$tabContainer.find(".tab-panel")
            $panels.hide();
            $panels.first().show();
            this.$selectedTab = this.$tabContainer.find(".tab").first();
            this.$selectedTab.addClass('selected disabled');
            return;
        }

        var sPanelToHide = this.$selectedTab.attr('aria-controls'),
            $panelToHide = this.$tabContainer.find('#' + sPanelToHide),

            sPanelToShow = p_$tab.attr('aria-controls'),
            $panelToShow = this.$tabContainer.find('#' + sPanelToShow);

        $panelToHide.hide();
        $panelToShow.show();

        this.$selectedTab.removeClass('selected disabled');
        this.$selectedTab = p_$tab;
    }
    return TabManager;
})