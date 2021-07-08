import React, { Component } from "react";

class CustomerDelete extends Component {
  deleteCustomer(id) {
    // /api/customers/7 : 고객 데이터가 7인 것을 삭제
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    });
    this.props.stateRefresh();
  }

  render() {
    return (
      <button
        onClick={(e) => {
          this.deleteCustomer(this.props.id);
        }}
      >
        Delete
      </button>
    );
  }
}

export default CustomerDelete;
