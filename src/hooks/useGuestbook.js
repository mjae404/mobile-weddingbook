// useGuestbook.js
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import useFirebase from "./useFirebase";
import { useEffect, useState } from "react";

export default function useGuestbook() {
    const [data, setData] = useState({ comments: [] });
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const { db } = useFirebase();

    const weddingCollectionRef = doc(db, "wedding", "guestbook");

    const getComments = async () => {
        try {
            const document = await getDoc(weddingCollectionRef);
            setData(document.data() || { comments: [] });
        } catch (error) {
            console.error("Error fetching comments", error);
            alert("데이터 가져오기 중 오류가 발생했습니다.");
        }
    };

    const addComment = async (name, message) => {
        if (!name || !message) {
            alert("이름, 메시지를 입력해주세요.");
            return;
        }
        const newComment = {
            name,
            message,
            timestamp: new Date().toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }),
        };

        try {
            await updateDoc(weddingCollectionRef, {
                comments: arrayUnion(newComment),
            });
            getComments();
        } catch (error) {
            console.error("Error adding comment", error);
            alert("댓글 추가 중 오류가 발생했습니다.");
        }
    };

    useEffect(() => {
        // Initial data fetch
        getComments();
    }, []);

    return {
        data,
        name,
        setName,
        message,
        setMessage,
        addComment,
    };
}
