import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const Index = () => {
  const [rubUsd, setRubUsd] = useState({
    first: 0,
    second: 0,
    third: 0,
  });
  const [rubEur, setRubEur] = useState({
    first: 0,
    second: 0,
    third: 0,
  });
  const [eurUsd, setEurUsd] = useState({
    first: 0,
    second: 0,
    third: 0,
  });

  const valuesRubUsd = Object.keys(rubUsd).map((key) => rubUsd[key]);
  const valuesRubEur = Object.keys(rubEur).map((key) => rubEur[key]);
  const valuesEurUsd = Object.keys(eurUsd).map((key) => eurUsd[key]);

  const minValueRubUsd = Math.min.apply(null, valuesRubUsd);
  const minValueRubEur = Math.min.apply(null, valuesRubEur);
  const minValueEurUsd = Math.min.apply(null, valuesEurUsd);

  useEffect(() => {
    axios('http://localhost:5000/api/v1/first/poll').then((res) => {
      setRubUsd((prev) => {
        return {
          ...prev,
          first: (res.data.rates.RUB / res.data.rates.USD).toFixed(2),
        };
      });

      setRubEur((prev) => {
        return {
          ...prev,
          first: (res.data.rates.RUB / res.data.rates.EUR).toFixed(2),
        };
      });
      setEurUsd((prev) => {
        return {
          ...prev,
          first: (res.data.rates.EUR / res.data.rates.USD).toFixed(2),
        };
      });
    });
  }, [rubUsd.first, rubEur.first, eurUsd.first]);
  useEffect(() => {
    axios('http://localhost:5000/api/v1/second/poll').then((res) => {
      setRubUsd((prev) => {
        return {
          ...prev,
          second: (res.data.rates.RUB / res.data.rates.USD).toFixed(2),
        };
      });

      setRubEur((prev) => {
        return {
          ...prev,
          second: (res.data.rates.RUB / res.data.rates.EUR).toFixed(2),
        };
      });
      setEurUsd((prev) => {
        return {
          ...prev,
          second: (res.data.rates.EUR / res.data.rates.USD).toFixed(2),
        };
      });
    });
  }, [rubUsd.second, rubEur.second, eurUsd.second]);
  useEffect(() => {
    axios('http://localhost:5000/api/v1/third/poll').then((res) => {
      setRubUsd((prev) => {
        return {
          ...prev,
          third: (res.data.rates.RUB / res.data.rates.USD).toFixed(2),
        };
      });

      setRubEur((prev) => {
        return {
          ...prev,
          third: (res.data.rates.RUB / res.data.rates.EUR).toFixed(2),
        };
      });
      setEurUsd((prev) => {
        return {
          ...prev,
          third: (res.data.rates.EUR / res.data.rates.USD).toFixed(2),
        };
      });
    });
  }, [rubUsd.third, rubEur.third, eurUsd.third]);
  return (
    <div className={styles.wrapper}>
      <table className={styles.respTab}>
        <thead>
          <tr>
            <th>Pair name/market</th>
            <th>First</th>
            <th>Second</th>
            <th>Third</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RUB/USD</td>
            {valuesRubUsd.map((el, idx) => {
              console.log(el)
              return <td key={idx} className={Number(el) === minValueRubUsd ? styles.bg : ''}>{el}</td>;
            })}
          </tr>
          <tr>
            <td>RUB/EUR</td>
            {valuesRubEur.map((el, idx) => {
              return <td key={idx} className={Number(el) === minValueRubEur ? styles.bg : ''}>{el}</td>;
            })}
          </tr>
          <tr>
            <td>EUR/USD</td>
            {valuesEurUsd.map((el, idx) => {
              return <td key={idx} className={Number(el) === minValueEurUsd ? styles.bg : ''}>{el}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;
