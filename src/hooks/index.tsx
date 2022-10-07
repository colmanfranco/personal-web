import { StoriesParams, useStoryblok } from '@storyblok/react';
import { useIsPreview, usePreviewStory } from '../providers/previewProvider';

export default function useStoryContent<S>(slug: string, resolve_relations?: string) {
  const isPreview = useIsPreview();
  const version = isPreview ? 'draft' : 'published';
  const apiOptions: StoriesParams = { resolve_relations, version };
  const story = useStoryblok(slug, apiOptions);
  const previewStory = usePreviewStory(slug);
  const finalStory = previewStory || story;

  const result = {
    ...finalStory?.content,
    ...(finalStory?.first_published_at && {
      first_published_at: finalStory.first_published_at,
    }),
  };

  return Object.keys(result).length > 0 ? (result as unknown as S) : null;
}