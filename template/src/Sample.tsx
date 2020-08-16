import React, { useEffect, useState } from 'react';

function Sample() {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    (async () => {
      const status = await fetch('/mock').then((res) => res.json());
      setIsOn(status.on);
    })();
  });
  return (
    <div>
      {isOn ? 'loaded' : 'not loaded'}
    </div>
  );
}

export default Sample;
