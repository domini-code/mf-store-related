interface Props<Entity>{
  loading: boolean;
  error: boolean;
  entity: Entity[];
  onRenderItem: (entity:Entity[])=> JSX.Element;
}

export const EntityList = <Entity extends unknown>({
  entity,
  loading,
  error,
  onRenderItem
}:Props<Entity>): JSX.Element => {
  const hasEntity = entity.length > 0;
  return(
    <div>
      {loading && <h5>Loading...</h5>}
      {error && <h5>Something went wrong</h5>}
      {!hasEntity && !loading && <h5>Nothing to display</h5>}
      {hasEntity && onRenderItem(entity)}
    </div>
  );
};