import {ref} from "vue";
import {blogComponents} from "@/components/features/blogComponents";
import apiMethods from "@/components/api/resources/apiMethods";

export const useApi = (path) => {
    const is404Plug = ref(false)
    const isPageDataLoaded = ref(false)
    const isLoading = ref(true)

    const componentName = blogComponents;
    const appPageData = ref({});
    const loadApiMethods = async() => {
        appPageData.value = await apiMethods.index( path );

        if (appPageData.value.dataEmpty === true) {
            isPageDataLoaded.value = false;
            is404Plug.value = true;
            isLoading.value = false;
        } else {
            isPageDataLoaded.value = true;
            isLoading.value = false;
        }
    };

    loadApiMethods().then();

    return {
        componentName,
        appPageData,
        isPageDataLoaded,
        is404Plug,
        isLoading,
    }
}