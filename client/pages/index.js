import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const Index = () => {
  let rubUsd = {
    first: 0,
    second: 0,
    third: 0,
  };
  let rubEur = {
    first: 0,
    second: 0,
    third: 0,
  };
  let eurUsd = {
    first: 0,
    second: 0,
    third: 0,
  };
  function calc(market, curr1, curr2) {
    if (market.RUB || market.USD || market.EUR) {
      rubUsd.first = (first.RUB / first.USD).toFixed(2);
      rubUsd.second = (second.RUB / second.USD).toFixed(2);
      rubUsd.third = (third.RUB / third.USD).toFixed(2);

      rubEur.first = (first.RUB / first.EUR).toFixed(2);
      rubEur.second = (second.RUB / second.EUR).toFixed(2);
      rubEur.third = (third.RUB / third.EUR).toFixed(2);

      eurUsd.first = (first.EUR / first.USD).toFixed(2);
      eurUsd.second = (second.EUR / second.USD).toFixed(2);
      eurUsd.third = (third.EUR / third.USD).toFixed(2);

      let valuesRubUsd = Object.keys(rubUsd).map(function (key) {return rubUsd[key];});
      let valuesRubEur = Object.keys(rubEur).map(function (key) {return rubEur[key];});
      let valuesEurUsd = Object.keys(eurUsd).map(function (key) {return eurUsd[key];});

      let minValueRubUsd = Math.min.apply(null, valuesRubUsd);
      let minValueRubEur = Math.min.apply(null, valuesRubEur);
      let minValueEurUsd = Math.min.apply(null, valuesEurUsd);

      let currentValue = (market[curr1] / market[curr2]).toFixed(2);

      if (
        currentValue == minValueRubUsd ||
        currentValue == minValueRubEur ||
        currentValue == minValueEurUsd
      ) {
        return <div className={styles.min}>{currentValue}</div>;
      }
      return currentValue;
    }
  }
  let [first, setFirst] = useState({
    RUB: 0,
    USD: 0,
    EUR: 0,
  });
  let [second, setSecond] = useState({
    RUB: 0,
    USD: 0,
    EUR: 0,
  });
  let [third, setThird] = useState({
    RUB: 0,
    USD: 0,
    EUR: 0,
  });
  useEffect(() => {
    let timeout = setTimeout(() => {
      axios('http://localhost:5000/api/v1/first').then((res) =>
        setFirst(res.data.rates),
      );
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [first]);
  useEffect(() => {
    let timeout = setTimeout(() => {
      axios('http://localhost:5000/api/v1/second').then((res) =>
        setSecond(res.data.rates),
      );
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [second]);
  useEffect(() => {
    let timeout = setTimeout(() => {
      axios('http://localhost:5000/api/v1/third').then((res) =>
        setThird(res.data.rates),
      );
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [third]);

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
            <td>RUB/CUPCAKE </td>
            <td> {first.RUB.toFixed(2)}</td>
            <td> {second.RUB.toFixed(2)}</td>
            <td> {third.RUB.toFixed(2)}</td>
          </tr>
          <tr>
            <td>USD/CUPCAKE</td>
            <td> {first.USD.toFixed(2)}</td>
            <td> {second.USD.toFixed(2)}</td>
            <td> {third.USD.toFixed(2)}</td>
          </tr>
          <tr>
            <td>EUR/CUPCAKE</td>
            <td> {first.EUR.toFixed(2)}</td>
            <td>{second.EUR.toFixed(2)}</td>
            <td> {third.EUR.toFixed(2)}</td>
          </tr>
          <tr>
            <td>RUB/USD</td>
            <td>{calc(first, 'RUB', 'USD') || 'Загрузка...'}</td>
            <td>{calc(second, 'RUB', 'USD') || 'Загрузка...'}</td>
            <td>{calc(third, 'RUB', 'USD') || 'Загрузка...'}</td>
          </tr>
          <tr>
            <td>RUB/EUR</td>
            <td>{calc(first, 'RUB', 'EUR') || 'Загрузка...'}</td>
            <td>{calc(second, 'RUB', 'EUR') || 'Загрузка...'}</td>
            <td>{calc(third, 'RUB', 'EUR') || 'Загрузка...'}</td>
          </tr>
          <tr>
            <td>EUR/USD</td>
            <td>{calc(first, 'EUR', 'USD') || 'Загрузка...'}</td>
            <td>{calc(second, 'EUR', 'USD') || 'Загрузка...'}</td>
            <td>{calc(third, 'EUR', 'USD') || 'Загрузка...'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;
