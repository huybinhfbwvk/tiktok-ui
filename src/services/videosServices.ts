import * as httpRequest from '~/utils/httpRequest';

interface getSuggestedProps {
    type: string;
    page: number;
}

export const getVideoList = async ({ type, page }: getSuggestedProps) => {
    try {
        const res = await httpRequest.get('/videos?', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
