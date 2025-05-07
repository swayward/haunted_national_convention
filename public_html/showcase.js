
	// This function will insert the html into the page
	function insert_html () {
		
		const htmlString = `
		
				<button type="button" class="btn" style="width:100%; height:25px; font-size:18px; background-color:green; color:white;" data-toggle="modal" data-target="#myModal">About This Site</button>
				
				<!-- Modal -->
				<div id="myModal" class="modal fade" role="dialog">
				    <div class="modal-dialog">
				        <!-- Modal content-->
				        <div class="modal-content">
				           <div class="modal-header">
				           <button type="button" class="close" data-dismiss="modal">&times;</button>
				                <h4 class="modal-title">About DocHaunts.com Haunted National Conventions webpage</h4>
				           </div>
				           <div class="modal-body">
				              	<p>This site was made for the 2016 election as part of a hounted house. If you pay attention, any time Lincoin or Nixon receve a vote, Washington gets a vote too!</p>
				           		<h5>Programming</h5>
								<ul>
									<li>HTML &amp; CSS: Website basics.</li>
									<li><a href="https://getbootstrap.com">Bootstrap 3.3.7</a>: Bootstrap is a Javascript &amp; CSS framework. It's doing most of the heaving lifting.</li>
									<li>Javascript: I wrote some Javascript functions to handle the vote tallies.</li>
									<li>AJAX: Asynchronous JavaScript and XML allowed me to change the voting button and the vote count without reloading the entire page. The index page refreshes the vote count every 5 seconds.</li>
								</ul>
							</div>
				           <div class="modal-footer">
				               <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				           </div>
				        </div>
				    </div>
				</div>
						
		`;
		
		document.body.innerHTML += htmlString;
		
	}
