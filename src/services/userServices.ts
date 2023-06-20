import * as httpRequest from '~/utils/httpRequest';

interface getSuggestedProps {
    page: number;
    perPage: number;
}

export const getSuggested = async ({ page, perPage }: getSuggestedProps) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
