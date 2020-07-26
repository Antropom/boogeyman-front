import React from 'react';

const DeleteModal = (props) => {
  const { deleteBoogeyman, setUpdated, killerId } = props;

  return (
    <div className="mx-auto mt-1 mb-1 col-12 col-md-12 col-lg-1" style={{ padding: '0' }}>
      <button
        type="button"
        className="btn btn-danger mx-auto col-12"
        data-toggle="modal"
        data-target={`#deleteModal${killerId}`}
      >
        Delete
      </button>

      <div
        className="modal fade"
        id={`deleteModal${killerId}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Are you sure you want to delete this entry ?
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                No
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  const condition = deleteBoogeyman(killerId);
                  setUpdated(condition);
                }}
                data-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
