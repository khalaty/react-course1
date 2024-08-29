import React, { useState } from 'react';
import './style.css';

function TabbedContent() {
  const [activeTab, setActiveTab] = useState(() => {
    const storedTab = localStorage.getItem('activeTab');
    return storedTab ? JSON.parse(storedTab) : 0;
  });
  // useEffect(() => {
  //   localStorage.setItem('activeTab', JSON.stringify(activeTab));
  // }, [activeTab]);

  const tabs = [
    {
      title: 'Content 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.',
    },
    {
      title: 'Content 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.',
    },
    {
      title: 'Content 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.',
    },
    {
      title: 'Content 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.',
    },
  ];

  

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="mainbox">
      <h1 className="maintitle">Tabs Component with React</h1>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      </div>
      
      <div className="content">   

        <h2>{tabs[activeTab].title}</h2>
        <p>{tabs[activeTab].description}</p>
      </div>
    </div>
  );
}


export default TabbedContent