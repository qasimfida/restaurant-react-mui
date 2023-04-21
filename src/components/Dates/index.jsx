import React, { useState } from "react";
import { Badge, BorderedBox, Date, DatesWrapper, Day, Wrapper } from "./styles";
const Dates = () => {
  const dates = [
    { day: "MON", date: "01", disabled:true },
    { day: "TUE", date: "02" },
    { day: "WED", date: "03" },
    { day: "THR", date: "04" },
    { day: "FRI", date: "05", locked: true },
    { day: "SAT", date: "06" },
    { day: "SUN", date: "07" },
  ];
  const [active, setActive] = useState(3);
  const handleChange = (event, newValue) => {
    if(newValue !== 4){
      setActive(newValue);
    }
  };
  const Node = ({date, day, locked=false}) => {
    return <Day variant="h6" locked={locked.toString()} >
      {locked &&
        <Badge>off</Badge>
      }
      {date}
      <Date >{day}</Date>
  </Day>
  }

  return (
    <BorderedBox>
      <DatesWrapper
          value={active}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs days"
      >
          {dates.map((item, index) => {
            const cls = `${item.disabled ? 'disabled': item.locked ? "locked": active === item.date ? "active": ""}`
            return (
              <Wrapper
                key={`${item.date}`}
                label={<Node {...item} />}
                className={cls}
                onClick={() => {if(!item.locked){
                  setActive(index)
                } 
              }}
              />
            );
          })}
        
      </DatesWrapper>
    </BorderedBox>
  );
};

export default Dates;
