import React from 'react';

const paymentMethods = [
  {
    name: 'VIETCOMBANK',
    icon: '🏦',
    accountNumber: '1038301335',
    accountName: ' NGO XUAN KHANH LAP'
  },
  {
    name: 'VIETCOMBANK',
    icon: '🏦',
    accountNumber: '1046543242',
    accountName: 'NGUYEN LE HONG NHUNG'
  },
  
  {
    name: 'website dịch vụ game cheat',
    icon: '🌐',
    accountNumber: '',
    accountName: ''
    
    
  },
  
  {
    name: 'web dịch vụ mạng xã hội',
    icon: '📊',
    accountNumber: '',
    accountName: ''
  }
];

const InfoPayments = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Info Payments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentMethods.map((method, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{method.icon}</span>
              <h3 className="font-bold">{method.name}</h3>
            </div>
            <p>STK: {method.accountNumber}</p>
            <p>CTK: {method.accountName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPayments;