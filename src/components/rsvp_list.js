import React, { Component } from 'react';
// You are importing the component, so that you need the name of
// the component to recognize it for rendering.
import RenderPeople from './rsvp_list_item';

class RSVPList extends Component {
	constructor () {
		super();

		this.state = {
			item: "",
			itemList: ["Douglas Kiel", "Abigail Hartman"]
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.removePeople = this.removePeople.bind(this);
	}

	handleChange(e) {
		this.setState({
			item: e.target.value
		});
	}

	onSubmitForm(e) {
		e.preventDefault();
		var text = this.state.item;

		var newList = this.state.itemList.concat(text);
		this.setState({
			itemList: newList,
			item: ""
		});
	}

	removePeople(index) {
		const { itemList } = this.state;
		let newList = itemList.filter((_item) => {
			return itemList.indexOf(_item) !== index;
		});

		this.setState({
			itemList: newList
		});
	}

	render() {
		const { item, itemList, disabled } = this.state;
		return (
			<div className="rsvp_list">
				<h2> Doug and Abby's rsvps </h2>
				<h5> Please let us know if you are coming! </h5>
				<div className="flex-wrapper">
					<form className="form-container">
						<input type="text" onChange={this.handleChange} value={item} />
						<button
							type="submit"
							onClick={this.onSubmitForm}
							disabled={item.length > 0 ? false: true}> +
						</button>
					</form>
				</div>
				<div className="display-list">
					<h2>Guest List</h2>
					<h5>{item.length} Friends attending</h5>
					<div className="guest-list">
						<RenderPeople
							itemList={itemList}
							removePeople={this.removePeople} />
					</div>
				</div>
			</div>
		);
	}

}

export default RSVPList;