import WebPage from "http://localhost/Vanilla/WebPage.js";
import globalState from "http://localhost/Vanilla/GlobalStateManager.js";

export default class RowDetails extends WebPage
{	
	#visibilityState;

	constructor(templateId) 
	{
		super(templateId);
    }
	
	back()
	{
		super.back();
	}
	
	unload()
	{
		super.unload();
	}
  
}
