sap.ui.define([

	"sap/ui/core/mvc/Controller"

], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("MassTimeTransferENH.controller.TimeTransferHome", {
		/* Sharath - Include the comment explaining the tasks performed in this method*/
		onInit: function() {
			this.getView().setModel(this.getOwnerComponent().getModel());
			/* Sharath - Explain in one line the task performed below*/
			/*the below code is used to get the custom icons */
			sap.ui.core.IconPool.addIcon('twosidearrow', 'customfont', 'deloitte-special-use-icon-font', 'e900');
			sap.ui.core.IconPool.addIcon('tagspecial', 'customfont', 'deloitte-special-use-icon-font', 'e9a5');
			sap.ui.core.IconPool.addIcon('multispecial', 'customfont', 'deloitte-special-use-icon-font', 'e9a7');
			sap.ui.core.IconPool.addIcon('listspecial', 'customfont', 'deloitte-special-use-icon-font', 'e94e');
			sap.ui.core.IconPool.addIcon('summarycust', 'customfont', 'deloitte-special-use-icon-font', 'e916');
			// var oModel = new sap.ui.model.json.JSONModel("model/Product.json");
			// this.getView().setModel(oModel);

			/*var Model = new sap.ui.model.json.JSONModel("model/four.json");
			this.getView().setModel(Model);*/
		},
		/* Sharath - Include the comment explaining the tasks performed in this method*/
		onDialogPress: function(oEvent) { /*PopOver when icon 'i' is pressed in the table*/
			var oButton = oEvent.getSource();
			this._oPopover = sap.ui.xmlfragment("MassTimeTransferENH.view.PopOverFragment", this);
			// this._oPopover.open(); 

			this._oPopover.openBy(oButton);
		},
		/* Sharath - Include the comment explaining the tasks performed in this method
		  Also, change the name of the method to a proper name*/

		onPressContinue: function(oEvent) {
			/*moving to the next screen on press of continue button
		                                               and enabling the next icon when continue is pressed*/
			var a = this.getView().byId("idIconTabBarSeparatorIcon"); /*select the icon tab bar*/
			var sKey = a.getSelectedKey(); /*get the selected key from the icon tab bar*/
			var one = "Transfer_Type";
			var two = "Projects";
			var three = "Results";

			switch (sKey) {
				/* Sharath - Maintain the constant values as constant variables. Then, use those variables in the case statement */
				/*Sharath-Have proper names instead of T and P*/
				case one:
					this.getView().byId("icontab_projects").setEnabled(true);
					a.getId(a.setSelectedKey("Projects")); /*if "TransferType" is selected goto "Projects" and set the buttons visible*/
					this.getView().byId("backId").setVisible(true);
					this.getView().byId("resetId").setVisible(true);
					break;

				case two:
					this.getView().byId("icontab_results").setEnabled(true);
					a.getId(a.setSelectedKey("Results")); /*if "Projects" is selected goto "Results" and set the buttons visible*/
					this.getView().byId("backId").setVisible(true);
					this.getView().byId("resetId").setVisible(true);
					break;

				case three:
					this.getView().byId("icontab_summary").setEnabled(true);

					a.getId(a.setSelectedKey("Summary")); /*if "Results" is selected goto "Summary" and set the buttons visible and disable continue button*/
					this.getView().byId("backId").setVisible(true);
					this.getView().byId("resetId").setVisible(true);
					this.getView().byId("execute").setVisible(true);
					this.getView().byId("continue").setVisible(false);

			}

		},
		/* Sharath - Include the comment explaining the tasks performed in this method
		  Also, change the name of the method to a proper name*/
		onPressBack: function(oEvent) { /*back button controls is defined in this method*/
			var a = this.getView().byId("idIconTabBarSeparatorIcon"); /*select the icon tab bar*/
			var sKey = a.getSelectedKey(); /*get the selected key from the icon tab bar*/
			/* Sharath - Maintain the constant values as constant variables. Then, use those variables in the case statement */
			/*Sharath-Have proper names instead of T and P*/
			var two = "Projects";
			var three = "Results";
			var four = "Summary";

			switch (sKey) {
				case two:
					this.getView().byId("icontab_projects").setEnabled(true);
					a.getId(a.setSelectedKey("Transfer_Type")); /*if "TransferType" is selected goto "Projects" and set the buttons visible*/

					break;

				case three:
					this.getView().byId("icontab_results").setEnabled(true);
					a.getId(a.setSelectedKey("Projects")); /*if "Projects" is selected goto "Results" and set the buttons visible*/

					break;
				case four:
					this.getView().byId("icontab_summary").setEnabled(true);

					a.getId(a.setSelectedKey("Results")); /*if "Results" is selected goto "Summary" and set the buttons visible and disable continue button*/

			}
		},
		close: function(oEvent) { /*Header Bar close*/
			this.getView().byId("header").setVisible(false);
		}

	});

});