import React from 'react';
import avatar1 from '../../assets/avatar.png';
import avatar2 from '../../assets/avatar.png';
import avatar3 from '../../assets/avatar.png';

const CustomerFeedback = () => (
  <div className="container py-3">
    <div className="feedback">
      <div className="d-flex align-items-start mb-3">
        <img src={avatar1} alt="Jenny Wilson" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
        <div>
          <h4 className="mb-1">Jenny Wilson</h4>
          <p className="mb-1">⭐⭐⭐⭐⭐</p>
          <p>
            The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free!) which was also very good. They were very conscientious about gluten allergies.
          </p>
        </div>
      </div>
      <div className="d-flex align-items-start mb-3">
        <img src={avatar2} alt="Dianne Russell" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
        <div>
          <h4 className="mb-1">Dianne Russell</h4>
          <p className="mb-1">⭐⭐⭐⭐⭐</p>
          <p>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.</p>
        </div>
      </div>
      <div className="d-flex align-items-start">
        <img src={avatar3} alt="Devon Lane" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
        <div>
          <h4 className="mb-1">Devon Lane</h4>
          <p className="mb-1">⭐⭐⭐⭐⭐</p>
          <p>Normally wings are wings, but theirs are lean meaty and tender, and were fried perfectly.</p>
        </div>
      </div>
    </div>
  </div>
);

export default CustomerFeedback;
