import React from 'react';
import { Table, Button } from 'react-bootstrap';
import avatar from '../../assets/avatar.png';

const RecentOrders = () => (
  <div className="container-fluid p-0">
    <div style={{ maxHeight: '200px' }}>
      <Table striped hover className="w-100 mb-0" variant="dark" style={{ borderCollapse: 'collapse', border: 'none' }}>
        <thead className="sticky-top ">
          <tr>
            <th className="text-center">Customer</th>
            <th className="text-center">Order No.</th>
            <th className="text-center">Amount</th>
            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">
              <img src={avatar} alt="Wade Warren" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
              Wade Warren
            </td>
            <td className="text-center">15478256</td>
            <td className="text-center">$124.00</td>
            <td className="text-center">
              <Button variant="success" size="sm">Delivered</Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <img src={avatar} alt="Jane Cooper" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
              Jane Cooper
            </td>
            <td className="text-center">48967586</td>
            <td className="text-center">$365.02</td>
            <td className="text-center">
              <Button variant="success" size="sm">Delivered</Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <img src={avatar} alt="Guy Hawkins" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
              Guy Hawkins
            </td>
            <td className="text-center">78956215</td>
            <td className="text-center">$45.88</td>
            <td className="text-center">
              <Button variant="danger" size="sm">Cancelled</Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <img src={avatar} alt="Kristin Watson" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
              Kristin Watson
            </td>
            <td className="text-center">20965732</td>
            <td className="text-center">$65.00</td>
            <td className="text-center">
              <Button variant="success" size="sm">Delivered</Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <img src={avatar} alt="Cody Fisher" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
              Cody Fisher
            </td>
            <td className="text-center">95715620</td>
            <td className="text-center">$545.00</td>
            <td className="text-center">
              <Button variant="success" size="sm">Delivered</Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <img src={avatar} alt="Savannah Nguyen" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
              Savannah Nguyen
            </td>
            <td className="text-center">78514568</td>
            <td className="text-center">$128.20</td>
            <td className="text-center">
              <Button variant="danger" size="sm">Cancelled</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
);

export default RecentOrders;
