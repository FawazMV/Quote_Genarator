import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../../../api/requests";
import { setTagsSlice } from "../../../utils/Redux/TagsSlice";

const TagSelect = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [tags, setTags] = useState([]);
    const { slugs } = useSelector(state => state.tags)
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        if (slugs) setSelectedOption(slugs)
        const response = await getTags()
        if (response.status === 200) {
            setTags(response.data)
        }
    }
    const dispatch = useDispatch()
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        dispatch(setTagsSlice({ slugs: selectedOption }))
    };
    return (
        <div className=" py-5 my-2 ">

            <select value={selectedOption} onChange={(e) => handleChange(e.target.value)}
                className="w-64 py-2 px-5 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
                <option className='capitalize'>{selectedOption}</option>
                {tags.map((option) => (
                    <option key={option._id} value={option.slugs}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );

}

export default TagSelect