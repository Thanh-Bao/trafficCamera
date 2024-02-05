
import { FlashList } from "@shopify/flash-list";
import CameraItem from './CameraItem';
import { useSelector, useDispatch } from 'react-redux';


const MyList = () => {
  const data = useSelector((state) => state.changeDistrict.listCamera);

  return (
      <FlashList
        key={data[0].ID} // dòng này để reset về camera đầu tiên mỗi khi đổi quận dropdown
        keyExtractor={(_, index) => index}
        data={data}
        renderItem={({ item }) => <CameraItem objCamera={item} />}
        estimatedItemSize={data.length}
        initialScrollIndex={0}
      />
  );
};

export default MyList;