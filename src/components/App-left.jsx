function AppLeft({ defaultData }) {
  const { stations, trains, routes } = defaultData;
  return (
    <div className="app-left">
      <details>
        <summary>车站列表</summary>
        <ul>
          {stations.map((station, idx) => (
            <li key={idx}>{station.name}</li>
          ))}
        </ul>
      </details>
      <details>
        <summary>路线列表</summary>
        <ul>
          {routes.map((route, idx) => (
            <li key={idx} title={route.points.map(point => point.name).join('-')}>{route.name}</li>
          ))}
        </ul>
      </details>
      <details>
        <summary>车次列表</summary>
        <ul>
          {trains.map((train, idx) => (
            <li key={idx}>{train.train_number + ' ' + train.start.name + '——' + train.end.name}</li>
          ))}
        </ul>
      </details>
    </div>
  )
}

export default AppLeft
