import {
  useContext,
  useState,
  PropsWithChildren,
  createContext,
  useMemo,
} from 'react';
import { MockDataItem, MockDataList } from '../../shared/mockData';

type ContextValueType = [
  MockDataList | [],
  React.Dispatch<React.SetStateAction<MockDataList | []>>,
  (item: MockDataItem) => () => void
];

const SelectedItemsContext = createContext<ContextValueType | null>(null);

export function useSelectedItems() {
  const context = useContext(SelectedItemsContext);

  if (!context) {
    throw new Error(
      `useSelectedItems может использоваться только с SelectedItemsProvider`
    );
  }

  return context;
}

export function SelectedItemsProvider(props: PropsWithChildren) {
  const [selectedItems, setSelectedItems] = useState<MockDataList | []>([]);

  const handleSelectItem = (item: MockDataItem) => () => {
    const isItemInSelectedItems = !!selectedItems.filter(
      selectedItem => selectedItem.id === item.id
    ).length;

    if (isItemInSelectedItems) {
      setSelectedItems(prevState =>
        prevState.filter(selectedItem => selectedItem.id !== item.id)
      );
    } else {
      setSelectedItems(prevState => [...prevState, item]);
    }
  };

  const value: ContextValueType = useMemo(
    () => [selectedItems, setSelectedItems, handleSelectItem],
    [selectedItems]
  );

  return <SelectedItemsContext.Provider value={value} {...props} />;
}
