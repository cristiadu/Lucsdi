/*
 * GET home page.
 */

exports.view = function(req, res){
	if(req.session.logged == true)
  		res.render('plan');
  	else
    	res.render('index');
};

