const GroupsSidebar = (props) => {
 return (
	<div className="col-sm-12 col-md-3 d-none d-sm-block">
	<div className="card">
		<div className="card-header bg-primary">
			<h3>Your Groups</h3>
		</div>
		<ul className="list-group list-group-flush">
			<li className="list-group-item">
				<h6>AIDS/LifeCycle</h6>
				<p>All particiapnts and Staff</p>
			</li>
			<li className="list-group-item">
				<h6>Count</h6>
				<p>Rest Stop Count Updates</p>
			</li>
			<li className="list-group-item">
				<h6>Emergency Operations</h6>
				<p>Private channel for Medical updates</p>
			</li>
			<li className="list-group-item">
				<h6>Lost and Found</h6>
				<p>Participants looking for lost items</p>
			</li>
			<li className="list-group-item">
				<h6>Medical</h6>
				<p>General Med team updates</p>
			</li>
			<li className="list-group-item">
				<h6>Participant Support</h6>
				<p>Questions for Participant Support</p>
			</li>
			<li className="list-group-item">
				<h6>Route Updates</h6>
				<p>Whats happening on the Route</p>
			</li>
			<li className="list-group-item">
				<h6>Special Events</h6>
				<p>Use for Day on The Ride, Expo, etc.</p>
			</li>
			<li className="list-group-item">
				<h6>Staff</h6>
				<p>Updates for ALC Staff</p>
			</li>
		</ul>
	</div>
</div>
 );
}

export default GroupsSidebar;