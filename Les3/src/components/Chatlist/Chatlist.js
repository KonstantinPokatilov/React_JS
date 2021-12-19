import './Chatlist.css'

export const Chatlist = ({ chats }) => (
    <div className="chats_list">
        <h4>Список чатов</h4>
        {chats.map(({ name, id }) => (
            <div key={id} className='chat_item'>
                <div>{name}</div>
                <div>{id}</div>
            </div>
        ))}
    </div>
)